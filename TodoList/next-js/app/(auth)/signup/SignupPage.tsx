"use client";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type Props = {
  submitForm?: (values: any) => Promise<{ message: string }>;
};

const SignupPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({ password: false, confirmPassword: false });
  return (
    <form className="flex flex-col gap-1">
      <div className="flex sm:flex-row sm:items-start xs:flex-col xs:gap-3 sm:gap-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" type="text" />
          <span>{}</span>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" type="text" />
          <span>{}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" />
        <span>{}</span>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="flex items-center gap-1">
          <Input
            id="password"
            type={showPassword.password ? "text" : "password"}
          />
          <Button
            onClick={() =>
              setShowPassword((prev) => {
                return { ...prev, password: !prev.password };
              })
            }
            type="button"
            aria-label="Toggle Password Visibility"
            variant="secondary"
          >
            {showPassword.password ? <MdVisibility /> : <MdVisibilityOff />}
          </Button>
        </div>
        <span>{}</span>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="flex items-center gap-1">
          <Input
            id="confirmPassword"
            type={showPassword.confirmPassword ? "text" : "password"}
          />
          <Button
            onClick={() => {
              setShowPassword((prev) => {
                return { ...prev, confirmPassword: !prev.confirmPassword };
              });
            }}
            type="button"
            aria-label="Toggle Confirm Password Visibility"
            variant="secondary"
          >
            {showPassword.confirmPassword ? (
              <MdVisibility />
            ) : (
              <MdVisibilityOff />
            )}
          </Button>
        </div>
        <span>{}</span>
      </div>
      <Button type="submit" aria-label="Submit Registration Form">
        Submit
      </Button>
    </form>
  );
};

export default SignupPage;
