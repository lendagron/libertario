import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

type User = {
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type SignUpCredentials = {
  name: string;
  email: string;
  phone: string;
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

type paymentKonkinCredentials = {
  name: string;
};

type AuthContextData = {
  sigIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signOut(): void;
  payment(credentials: paymentCredentials): Promise<void>;
  paymentKonkin(credentials: paymentKonkinCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
  recover(credentials: recoverCredentials);
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

type recoverCredentials = {
  email: string;  
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

  async function sigIn({ email, password }: SignInCredentials) {
    try {
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

      Router.push("/painel");
    } catch (err) {
      console.log(err);
    }
  }

  async function signUp({ name, email, phone, password }: SignUpCredentials) {
    try {
      await api.post("/signup", {
        name,
        email,
        phone,
        password,
      });
      sigIn({ email, password });
    } catch (err) {
      console.log(err);
    }
  }

  async function payment({
    name,
    email,
    password,
    customer_data,
    card_data,
    plan_data,
  }: paymentCredentials) {
    try {
      await api.post("/signup", {
        name,
        email,
        password,
        customer_data,
        card_data,
        plan_data,
      });
      sigIn({ email, password });
    } catch (err) {
      console.log(err);
    }
  }

 async function recover({
  email,
 }): recoverCredentials {
    try {
      await api.post("/solicitations/forgot-password", {
          email,
      });
    } catch (error) {
      console.error(error); 
    }
 }


  async function paymentKonkin({ name }: paymentKonkinCredentials) {}

  return (
    <AuthContext.Provider
      value={{
        sigIn,
        signUp,
        signOut,
        payment,
        paymentKonkin,
        isAuthenticated,
        user,
        recover,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
