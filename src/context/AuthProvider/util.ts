import { Api } from "../../services/api";
import { IUser } from "./types";

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post("login", { email, password });

    return request.data;
  } catch (error) {
    return null;
  }
}

export function setUserSessionStorage(token: IUser | null) {
  sessionStorage.setItem("u", JSON.stringify(token));
}

export function getUserSessionStorage() {
  const json = sessionStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}
