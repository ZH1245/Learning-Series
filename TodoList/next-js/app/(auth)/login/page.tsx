import { ThemeSwitcher } from "@/components/ToggleTheme";
import { Button, buttonVariants } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import LoginForm, { LoginFormProps } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login | Todo",
  description: "Welcome to Todo App",
};

function LoginPage(): Promise<{ message: string }> {
  async function onSubmit(values: LoginFormProps) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: "Welcome To MyTodoApp" });
      }, 1000);
    });
  }
  return (
    <div className={cn("h-[inherit] grid grid-cols-12")}>
      <div className="xs:col-span-12 sm:col-span-8 md:col-span-6 h-full">
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
                  className={buttonVariants({ variant: "link" })}
                >
                  Reset Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:col-span-12 xs:hidden sm:block sm:col-span-4 md:col-span-6 h-full bg-primary text-white">
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="flex flex-col gap-8 text-center flex-grow items-center justify-center">
            <span className="text-4xl font-medium">Welcome to MyTodoApp</span>
            <span className="text-lg">Best Way to organize your tasks.</span>
          </div>
          <span>Try! It's free</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
