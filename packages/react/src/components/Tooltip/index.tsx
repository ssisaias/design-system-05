import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import * as TooltipRdx from "@radix-ui/react-tooltip";
import React from "react";
import { Text, TextProps } from "../Text";

export interface TooltipProps
  extends Omit<TooltipRdx.TooltipProps, "children"> {
  textContent: string;
  variant?: "dark" | "light";
  size: TextProps["size"];
  textClassName: TextProps["className"];
  tooltipTrigger: React.ReactNode;
}

export function Tooltip(props: TooltipProps) {
  const tooltipClass =
    !props.variant || props.variant === "dark" ? "bg-gray900" : "bg-gray400";
  const arrowClass =
    !props.variant || props.variant === "dark"
      ? "fill-gray900"
      : "fill-gray400";
  return (
    <TooltipRdx.Provider>
      <TooltipRdx.Root>
        <TooltipRdx.Trigger asChild>{props.tooltipTrigger}</TooltipRdx.Trigger>
        <TooltipRdx.Portal>
          <TooltipRdx.Content
            className={`${tooltipClass} data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]`}
            sideOffset={5}
          >
            <Text
              size={props.size}
              content={props.textContent}
              className={props.textClassName}
            ></Text>
            <TooltipRdx.Arrow className={`${arrowClass}`} />
          </TooltipRdx.Content>
        </TooltipRdx.Portal>
      </TooltipRdx.Root>
    </TooltipRdx.Provider>
  );
}
