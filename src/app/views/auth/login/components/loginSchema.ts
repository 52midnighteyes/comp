import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().trim().email("email format isn't valid").required(),
  password: Yup.string().trim().min(5).required("password is required"),
});
