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
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Primary Button",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    disabled: true,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
    disabled: true,
  },
};
