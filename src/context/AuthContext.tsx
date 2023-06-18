import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useRouter } from 'next/router';

type User = {
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
  destination?: string;
};

type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
};

type customer_data = {
  cpf: string;
  address: address;
  phone: phone;
};

type phone = {
  ddi: string;
  ddd: string;
  number: string;
};

type address = {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  street_number: string;
  complement?: string;
  zipcode: string;
};

type card_data = {
  label: string;
  holder_name: string;
  number: string;
  expiration_month: string;
  expiration_year: string;
  cvv: string;
};

type plan_data = {
  id: string;
  frequency: string;
};

type paymentCredentials = {
  name: string;
  email: string;
  password: string;
  customer_data: customer_data;
  plan_data: plan_data;
  card_data: card_data;
};

type recoverCredentials = {
  email: string;
};

type changePasswordCredentials = {
  password: string;
  password_confirmation: string;
};

type redefinePasswordCredentials = {
  password: string;
  password_confirmation: string;
  solicitation: string;
};

type AuthContextData = {
  sigIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
  payment(credentials: paymentCredentials): Promise<void>;
  addAdress(credentials: address): Promise<void>;
  user: User;
  isAuthenticated: boolean;
  recover(credentials: recoverCredentials): Promise<void>;
  changePassword(credentials: changePasswordCredentials): Promise<void>;
  redefinePassword(credentials: redefinePasswordCredentials): Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function signOut() {
  destroyCookie(undefined, "CL.token");
  destroyCookie(undefined, "CL.refreshToken");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "CL.token": token } = parseCookies();

    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { permissions, roles } = response.data;
          setUser({ permissions, roles });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function sigIn({ email, password, destination }: SignInCredentials) {
    const response = await api.post("/login", {
      email,
      password,
    });

    const { token, refreshToken, permissions, roles } = response.data;

    setCookie(undefined, "CL.token", token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    setCookie(undefined, "CL.refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    setUser({
      permissions,
      roles,
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    Router.push(destination ? destination : "/painel");
  }

  async function signUp({ name, email, password }: SignUpCredentials) {
    await api.post("/signup", {
      name,
      email,
      password,
    });
    sigIn({ email, password });
  }

  async function payment({
    name,
    email,
    password,
    customer_data,
    card_data,
    plan_data,
  }: paymentCredentials) {
    await api.post("/signup", {
      name,
      email,
      password,
      customer_data,
      card_data,
      plan_data,
    });
    sigIn({ email, password });
  }

  async function addAdress({
    country,
    state,
    city,
    neighborhood,
    street,
    street_number,
    complement,
    zipcode,
  }: address) {
    await api.put("/me/addresses", {
      country,
      state,
      city,
      neighborhood,
      street,
      street_number,
      complement,
      zipcode,
    });
  }

  async function recover({ email }: recoverCredentials) {
    await api.post("/solicitations/forgot-password", {
      email,
    });
  }

  async function redefinePassword({
    password,
    password_confirmation,
    solicitation,
  }: redefinePasswordCredentials) {
    await api.patch("/solicitation", {
      password,
      password_confirmation,
      solicitation,
    });

    signOut();
  }

  async function changePassword({
    password,
    password_confirmation,
  }: changePasswordCredentials) {
    await api.put("/me", {
      password,
      password_confirmation,
    });

    signOut();
  }

  return (
    <AuthContext.Provider
      value={{
        sigIn,
        signUp,
        signOut,
        payment,
        addAdress,
        recover,
        changePassword,
        redefinePassword,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
