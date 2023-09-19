import { ThemeSwitcher } from "@/components/ToggleTheme";
import { buttonVariants } from "@/components/shadcn/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import ResetForm from "./ResetForm";
import { Separator } from "@/components/shadcn/ui/separator";
import { redirect } from "next/navigation";

function ForgotPasswordPage() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full max-w-md rounded p-2 gap-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 w-[90%]">
            <span className="xs:text-base sm:text-lg font-medium">
              Forgot Password?
            </span>
            <span className="text-sm font-medium text-card-foreground">
              Please enter the email associated with your account to reset your
              password.
            </span>
          </div>
          <ThemeSwitcher />
        </div>
        <ResetForm
          submitFn={async (values) => {
            "use server";
            const email = values.get("email");
            redirect(`/new-password?email=${email}`);
          }}
        />
        <Separator />
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "secondary" }), "gap-2")}
        >
          <BiArrowBack />
          <span>Back to Login</span>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
