import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@isaias-ui/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    label: "Send",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    label: "New",
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    disabled: true,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    label: "Cancel",
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    label: "Cancel",
    disabled: true,
  },
};
