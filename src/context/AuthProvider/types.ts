export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  setUser(user: IUser);
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
