import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Used to merge Tailwind classes with clsx
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
