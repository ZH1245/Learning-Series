"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider attribute="class" defaultTheme="light">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </ThemeProvider>
    </>
  );
}
