import { ThemeSwitcher } from "@/components/ToggleTheme";
import { buttonVariants } from "@/components/shadcn/ui/button";
import { Separator } from "@/components/shadcn/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import NewPasswordForm from "./NewPasswordForm";
import { redirect } from "next/navigation";

function NewPasswordPage() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full max-w-md rounded p-2 gap-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <span className="xs:text-base sm:text-lg font-medium">
              Request Sent Successfully
            </span>
            <span className="text-sm font-medium text-card-foreground">
              Please enter the OTP you received on your email
            </span>
          </div>
          <ThemeSwitcher />
        </div>
        <NewPasswordForm
          submitForm={async (values) => {
            "use server";
            redirect("/login");
          }}
        />
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center justify-center">
            <span className="text-sm">{"Didn't receive a Code?"}</span>
            <Link
              href="/signup"
              className={buttonVariants({
                variant: "link",
              })}
            >
              Resend Code
            </Link>
          </div>
          <Separator />
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
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;
