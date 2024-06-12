import React from "react";
import { cn } from "../lib/tw-merge";

const Container = ({ children, className }) => {
  return (
    <div className={cn("flex w-[90%] max-w-[1450px] lg:w-[65%]", className)}>
      {children}
    </div>
  );
};

export { Container };
