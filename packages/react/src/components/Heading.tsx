import { ElementType } from "react";
import "../styles/twbuild.css";
import { clsx } from "clsx";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?:
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
  children?: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  const classSize = clsx({
    "text-md": props.size === "md",
    "text-lg": !props.size || props.size === "lg",
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
          className={`${props.className} ${classSize} margin-0 leading-shorter text-gray-100`}
        >
          {props.children}
        </props.as>
      ) : (
        <h2
          className={`${props.className} ${classSize} margin-0 leading-shorter text-gray-100`}
        >
          {props.children}
        </h2>
      )}
    </>
  );
}
