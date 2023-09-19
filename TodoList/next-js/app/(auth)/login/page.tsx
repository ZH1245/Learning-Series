import { ThemeSwitcher } from "@/components/ToggleTheme";
import { Button, buttonVariants } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import React, { useState } from "react";
import LoginForm, { LoginFormProps } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login | TodoApp",
  description: "Welcome to Todo App",
};

function LoginPage() {
  async function onSubmit(
    values: LoginFormProps
  ): Promise<{ message: string }> {
    "use server";
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: "Welcome To MyTodoApp" });
      }, 1000);
    });
  }
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full max-w-md rounded p-2 gap-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="xs:text-base sm:text-lg font-medium">
              Welcome Back!
            </span>
            <span className="text-sm font-medium text-card-foreground">
              Please enter credentials to continue
            </span>
          </div>
          <ThemeSwitcher />
        </div>
        <LoginForm submitForm={onSubmit} />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">{"Don't have an account?"}</span>
            <Link
              href="/signup"
              className={buttonVariants({
                variant: "secondary",
              })}
            >
              Register
            </Link>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="text-sm">{"Forgot Password?"}</span>
            <Link
              href="/forgot-password"
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
            >
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
