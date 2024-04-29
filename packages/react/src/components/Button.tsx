import "../styles/twbuild.css";
import { clsx } from "clsx";
import { Text } from "./Text";
import React, { ComponentProps } from "react";

export interface ButtonProps {
  disabled?: boolean;
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md";
}

export function Button(props: ButtonProps) {
  const variant = clsx({
    "text-white bg-ignite500 hover:enabled:bg-ignite300 disabled:bg-gray-200 disabled:text-gray-600":
      !props.variant || props.variant === "primary",
    "text-ignite300 bg-none border-2 border-solid border-ignite500 hover:enabled:bg-ignite500 hover:text-white disabled:border-gray-200 disabled:text-gray-200 hover:disabled:bg-gray-200 hover:disabled:text-gray-600":
      props.variant === "secondary",
    "text-gray-100 bg-none hover:enabled:text-white disabled:text-gray-200 disabled:border-gray-200 hover:border-2":
      props.variant === "tertiary",
  });
  const size = clsx({
    "py-1 px-1": props.size === "sm",
    "py-2 px-2": !props.size || props.size === "md",
  });
  return (
    <button
      className={`${variant} ${size} rounded-sm text-sm font-medium font-default text-center min-w-[120px] box-border flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed`}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}