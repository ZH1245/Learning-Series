"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
export interface LoginFormProps {
  email: string;
  password: string;
}
interface Props {
  submitForm: (values: LoginFormProps) => Promise<{ message: string }>;
}
const schema = object({
  email: string().email("Must be a vaild Email").required("Email is required"),
  password: string()
    .required("Password is Required")
    .min(6, "Password must be atleast 6 characters"),
});
function LoginForm(props: Props) {
  const [showPassword, setshowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(props.submitForm)}
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required {...register("email")} />
        <span className="text-destructive text-sm">
          {errors.email?.message}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="flex items-cener justify-between gap-1">
          <Input
            {...register("password")}
            id="password"
            required
            type={showPassword ? "text" : "password"}
          />
          <Button
            type="button"
            aria-label="Show Hide Password"
            variant="secondary"
            onClick={() => setshowPassword((prev) => !prev)}
          >
            {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
          </Button>
        </div>
        <span className="text-destructive text-sm">
          {errors.password?.message}
        </span>
      </div>
      <Button type="submit" aria-label="Submit Form">
        Submit
      </Button>
    </form>
  );
}

export default LoginForm;
