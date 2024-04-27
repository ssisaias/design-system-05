import { User } from "@phosphor-icons/react/dist/ssr";
import * as AvatarRdx from "@radix-ui/react-avatar";
import { ComponentProps } from "react";

export interface AvatarProps
  extends ComponentProps<typeof AvatarRdx.AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarRdx.Root className="rounded-full inline-block w-12 h-12 overflow-hidden">
      <AvatarRdx.Image
        {...props}
        className="w-full h-full object-cover rounded-[inherit]"
      />
      <AvatarRdx.Fallback
        delayMs={600}
        className="flex items-center justify-center bg-gray-600 text-gray-800 xw-full h-full"
      >
        <User className="w-6 h-6" weight="duotone"/>
      </AvatarRdx.Fallback>
    </AvatarRdx.Root>
  );
}
