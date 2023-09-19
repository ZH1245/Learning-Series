"use client";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Separator } from "@/components/shadcn/ui/separator";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import OTPInput from "react-otp-input";
type Props = {
  submitForm: (values: FormData) => void;
};

const NewPasswordForm = (props: Props) => {
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState<{
    password: boolean;
    confirmPassword: boolean;
  }>({ confirmPassword: false, password: false });
  return (
    <div className="flex flex-col gap-5">
      <Label className="flex flex-col gap-2">
        Email
        <Input value={useSearchParams().get("email")?.toString()} disabled />
      </Label>
      <Separator />
      <form className="flex flex-col gap-3" action={props.submitForm}>
        <Label className="flex flex-col gap-2">
          OTP Code
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              width: "100%",
            }}
            containerStyle={{
              gap: "1em",
              width: "100%",
            }}
            //   renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <Input {...props} required type="number" min={0} />
            )}
          />
        </Label>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="flex items-center justify-between gap-1">
            <Input
              id="password"
              name="password"
              type={showPassword.password ? "text" : "password"}
            />
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                setShowPassword((prev) => {
                  return { ...prev, password: !prev.password };
                });
              }}
            >
              {showPassword.password ? <MdVisibility /> : <MdVisibilityOff />}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="flex items-center justify-between gap-1">
            <Input
              id="confirmPassword"
              name="password"
              type={showPassword.confirmPassword ? "text" : "password"}
            />
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                setShowPassword((prev) => {
                  return { ...prev, confirmPassword: !prev.confirmPassword };
                });
              }}
            >
              {showPassword.confirmPassword ? (
                <MdVisibility />
              ) : (
                <MdVisibilityOff />
              )}
            </Button>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
