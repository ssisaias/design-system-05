import { ElementType } from "react";
import "../styles/twbuild.css";
import { clsx } from "clsx";

export interface TextProps {
  content: string;
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  as?: ElementType;
}

export function Text(props: TextProps) {
  const classSize = clsx({
    "text-xxs": props.size === "xxs",
    "text-xs": props.size === "xs",
    "text-sm": props.size === "sm",
    "text-md": !props.size || props.size === "md",
    "text-lg": props.size === "lg",
    "text-xl": props.size === "xl",
    "text-2xl": props.size === "2xl",
    "text-4xl": props.size === "4xl",
    "text-5xl": props.size === "5xl",
    "text-6xl": props.size === "6xl",
    "text-7xl": props.size === "7xl",
    "text-8xl": props.size === "8xl",
    "text-9xl": props.size === "9xl",
  });
  return (
    <>
      {props.as ? (
        <props.as
          className={`${classSize} font-default leading-base margin-0 text-gray-100`}
        >
          {props.content}
        </props.as>
      ) : (
        <p
          className={`${classSize} font-default leading-base margin-0 text-gray-100`}
        >
          {props.content}
        </p>
      )}
    </>
  );
}
