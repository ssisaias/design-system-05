import type { StoryObj, Meta } from "@storybook/react";
import { Text, Tooltip, TooltipProps } from "@isaias-ui/react";

export default {
  title: "Data Display/Tooltip",
  component: Tooltip,
  args: {
    textContent: "Example",
    tooltipTrigger: (
      <div>
        <Text
          content="Hover to trigger"
          className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full"
        />
      </div>
    ),
    size: "xs",
    variant: "dark",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["dark", "light"],
      control: {
        type: "select",
      },
    },
    tooltipTrigger: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip is a small pop-up window that appears when a user pauses the mouse pointer over an element, such as a Button or Icon. It provides additional information about that element.",
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};

export const LightVariant: StoryObj<TooltipProps> = {
  args: {
    variant: "light",
  },
  parameters: {
    docs: {
      description: {
        story: "Tooltip with light variant",
      },
    },
  },
};

export const DarkVariant: StoryObj<TooltipProps> = {
  args: {
    variant: "dark",
  },
  parameters: {
    docs: {
      description: {
        story: "Tooltip with dark variant",
      },
    },
  },
};
