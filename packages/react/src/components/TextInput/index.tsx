import clsx from "clsx";
import { forwardRef } from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  sizeVariant: "sm" | "md";
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    const size = clsx({
      "px-2 py-2": props.sizeVariant === "sm",
      "px-3 py-3": props.sizeVariant === "md" || !props.sizeVariant,
    });
    return (
      <div
        className={`${size} align-center box-border flex rounded-sm border-2 border-solid border-gray-900 bg-gray-900
      focus-within:border-ignite300
        has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50 
      `}
      >
        {!!prefix && (
          <span className="font-default text-sm font-regular text-gray-400">
            {prefix}
          </span>
        )}
        <input
          type="text"
          {...props}
          ref={ref}
          className="ont-default w-full border-none bg-transparent text-sm font-regular text-white placeholder-gray-400 placeholder:text-gray-400 focus:outline-0 disabled:cursor-not-allowed"
        />
      </div>
    );
  },
);
