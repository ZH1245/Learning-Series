import { ThemeSwitcher } from "@/components/ToggleTheme";
import { Button, buttonVariants } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import SignupPage from "./SignupPage";
import { Separator } from "@/components/shadcn/ui/separator";

function RegistrationPage() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full max-w-md rounded p-2 gap-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <span className="xs:text-lg sm:text-2xl font-medium">
              Registration!
            </span>
            <span className="text-sm font-medium text-card-foreground">
              Please enter the following details to get started with TodoApp
            </span>
          </div>
          <ThemeSwitcher />
        </div>
        <SignupPage />
        <div className="flex items-center w-[inherit] justify-center overflow-hidden gap-2">
          <Separator />
          <span>OR</span>
          <Separator />
        </div>
        <Button variant="secondary" className="gap-2">
          <FcGoogle size={20} />
          Continue with Google
        </Button>
        <div className="flex flex-col gap-2">
          <Link
            href="/login"
            className={cn(
              buttonVariants({
                variant: "secondary",
              }),
              "gap-2"
            )}
          >
            <BiArrowBack />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
