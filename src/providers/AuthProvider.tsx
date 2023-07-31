import React, { createContext, useContext, useState } from "react";

interface IAuthContext {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (
    email: string,
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    conpassword: string,
    gender: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used inside AuthProvider!");

  return context;
};

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);
  const [username, setUsername] = useState<string | null>(user);

  const login = async (username: string, password: string) => {
    const loginInfo = { username, password };

    try {
      const res = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });
      if (res.status > 400) {
        throw new Error(res.statusText);
      }
      const data = await res.json();

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", username);
      localStorage.setItem("userId", data.userId);
      setIsLoggedIn(true);
      setUsername(username);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const register = async (
    email: string,
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    conpassword: string,
    gender: string
  ) => {
    const registerBody = {
      email,
      username,
      firstname,
      lastname,
      password,
      conpassword,
      gender,
    };

    try {
      const res = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerBody),
      });
      const data = await res.json();

      if (data.statusCode && data.statusCode !== 201) {
        throw new Error(data.message);
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, username, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
