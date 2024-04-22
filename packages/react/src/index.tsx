import "./styles/twbuild.css";
import { clsx } from "clsx";

export type ButtonProps = {
  title: string;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large" | undefined;
}

export function Button(props: ButtonProps) {
  const { title, variant, size } = props;
  const className = clsx(
    "rounded",
    "py-2",
    "px-4",
    "border-0",
    "text-white",
    "font-bold",
    {
      "bg-ignite300": variant === "primary",
      "bg-ignite500": variant === "secondary",
      "text-sm": size === "small" || (!size),
      "text-base": size === "medium",
      "text-lg py-3 px-6": size === "large",
    }
  );
  return (
    <button className={`${className}`}>
      {title}
    </button>
  );
}
