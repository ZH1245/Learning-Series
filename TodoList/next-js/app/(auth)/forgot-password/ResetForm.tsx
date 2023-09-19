import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import React from "react";

type Props = {
  submitFn?: (values: FormData) => void;
};

const ResetForm = (props: Props) => {
  return (
    <form className="flex-col flex gap-2" action={props.submitFn} method="POST">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ResetForm;
