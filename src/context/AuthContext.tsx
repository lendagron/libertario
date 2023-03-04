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

type paymentCredentials = {
  name: string;
  endereco: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
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
        .get("/api/me")
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
      const response = await api.post("/api/login", {
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
      await api.post("/api/signup", {
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
    endereco,
    cpf,
    email,
    phone,
    password,
  }: paymentCredentials) {
    try {
      await api.post("/api/payment", {
        name,
        endereco,
        cpf,
        email,
        phone,
        password,
      });
      sigIn({ email, password });
    } catch (err) {
      console.log(err);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
