import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

type User = {
  login: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  login: string;
  password: string;
};

type AuthContextData = {
  sigIn(credentials: SignInCredentials): Promise<void>;
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
          const { login, permissions, roles } = response.data;
          setUser({ login, permissions, roles });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function sigIn({ login, password }: SignInCredentials) {
    try {
      const response = await api.post("/api/login", {
        login,
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
        login,
        permissions,
        roles,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/painel");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ sigIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
