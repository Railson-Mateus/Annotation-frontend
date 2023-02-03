export interface IUser {
  token?: string;
  email: string;
  imageUrl: string;
  name: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  setUser(user: IUser);
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
