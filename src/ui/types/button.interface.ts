import { HTMLAttributes, ReactNode } from "react";

export default interface Button extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}
