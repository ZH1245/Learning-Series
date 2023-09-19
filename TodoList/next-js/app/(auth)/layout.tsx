import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  children: React.ReactNode;
};
function AuthPageLayout(props: Props) {
  return (
    <div className={cn("h-[inherit] grid grid-cols-12")}>
      <div className="xs:col-span-12 md:col-span-8 lg:col-span-6 h-full xs:order-2 md:order-1">
        {props.children}
      </div>
      <div className="xs:col-span-12 xs:hidden sm:block  md:col-span-4 lg:col-span-6 h-full bg-primary text-white xs:order-1 md:order-2">
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="flex flex-col gap-8 text-center flex-grow items-center justify-center">
            <span className="text-4xl font-medium">Welcome to MyTodoApp</span>
            <span className="text-lg">Best Way to organize your tasks.</span>
          </div>
          <span className="pb-2">{"Try! It's free"}</span>
        </div>
      </div>
    </div>
  );
}

export default AuthPageLayout;
