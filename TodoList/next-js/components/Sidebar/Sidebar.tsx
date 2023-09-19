"use client";
import React, { useState } from "react";
import { Button } from "../shadcn/ui/button";

function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={`transition-[width] ${
        open ? "w-40" : "w-20"
      } bg-muted text-foreground h-full shadow`}
    >
      Sidebar
      <Button variant={"secondary"} onClick={() => setOpen((prev) => !prev)}>
        Toggle
      </Button>
    </div>
  );
}

export default Sidebar;
