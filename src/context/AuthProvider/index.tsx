import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import {
  getUserSessionStorage,
  LoginRequest,
  setUserSessionStorage,
} from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserSessionStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const user = response.userPayload;

    const payload = {
      token: response.accessToken,
      email,
      name: user.name,
      imageUrl: user.imageUrl,
    };
    setUser(payload);
    setUserSessionStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserSessionStorage(null);
  }

  return (
    <AuthContext.Provider
      value={{
        ...user,
        setUser,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
