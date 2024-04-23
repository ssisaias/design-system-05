import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@isaias-ui/react";

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    title: "Primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    title: "Secondary",
  },
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    title: "Big button",
    size: "large",
  },
};
