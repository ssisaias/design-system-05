import { Check } from "@phosphor-icons/react/dist/ssr";
import * as CheckboxRdx from "@radix-ui/react-checkbox";
import React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRdx.Root
      checked={props.checked}
      className="flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-xs border-2 border-solid border-gray-900 bg-gray-900 leading-[0] focus:border-2 focus:border-solid focus:border-ignite300 data-[state=checked]:bg-ignite300"
    >
      <CheckboxRdx.Indicator
        className="h-4 w-4 text-white"
        asChild
      >
        <Check weight="bold" />
      </CheckboxRdx.Indicator>
    </CheckboxRdx.Root>
  );
}
