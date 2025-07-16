"use client";

import { Formik, Form, FormikProps } from "formik";
import { ILoginArgs } from "./types";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { loginSchema } from "./loginSchema";
import { Input } from "@/components/ui/input";

import { LoginService } from "@/features/auth/api/post.auth";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const initialValues: ILoginArgs = {
    email: "",
    password: "",
  };

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = ({ email, password }: ILoginArgs) => {
    LoginService({ email, password });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {(props: FormikProps<ILoginArgs>) => {
        const { values, errors, touched, handleChange } = props;
        return (
          <Form>
            <div className="w-[280px] flex flex-col gap-4 p-5 rounded-2xl bg-[#2c2c2e] text-[#fdfcfb]">
              <p className="font-bold text-2xl justify-center flex">login</p>
              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <Input
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  ref={emailRef}
                  className="rounded-2xl"
                  placeholder="Input your email"
                />
                <div className="min-h-4 text-xs text-red-500 ml-1">
                  {touched.email && errors.email && `*${errors.email}`}
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1.5">
                <div className="relative w-full">
                  <Input
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange}
                    className="rounded-2xl pr-10" // ← kasih ruang buat icon
                    placeholder="Input your password"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-[#a0a0a0] hover:text-white cursor-pointer"
                  >
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </span>
                </div>
                <div className="min-h-4 text-xs text-red-500 ml-1">
                  {touched.password && errors.password && `*${errors.password}`}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="mt-2 w-full bg-[#f7f7f7] text-[#1c1c1e] rounded-2xl"
              >
                Log In
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
