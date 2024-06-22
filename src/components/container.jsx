import React from "react";
import { cn } from "../lib/tw-merge";

const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto flex w-[90%] max-w-[1350px]", className)}>
      {children}
    </div>
  );
};

export { Container };
