import React from "react";
import { ThemeSwitcher } from "../ToggleTheme";

function Header() {
  return (
    <div className="p-2 bg-muted text-foreground">
      <div className="flex justify-between items-center">
        Header
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
