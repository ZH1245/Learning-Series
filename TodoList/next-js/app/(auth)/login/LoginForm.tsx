"use client";
import React from "react";
import { useForm } from "react-hook-form";
export interface LoginFormProps {
  email: string;
  password: string;
}
interface Props {
  submitForm: (values: LoginFormProps) => Promise<{ message: string }>;
}
function LoginForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    // resolver:yupResolver
  });
  return <div>LoginForm</div>;
}

export default LoginForm;
