import axios from "axios";
import { ILogin } from "@/features/types";

export async function LoginService(params: ILogin) {
  try {
    const response = await axios.post("http://localhost:8000/auth/login", {
      email: params.email,
      password: params.password,
    });

    return response.data;
  } catch (err) {
    throw err;
  }
}
