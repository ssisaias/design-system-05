import type { StoryObj, Meta } from "@storybook/react";
import { Box, TextInput, TextInputProps } from "@isaias-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  argTypes: {
    sizeVariant: {
      options: ["sm", "md"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type something...",
    sizeVariant: "md",
  },
};

export const Small: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type something...",
    sizeVariant: "sm",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const Prefixed: StoryObj<TextInputProps> = {
  args: {
    prefix: "site.com/",
    placeholder: "your-username",
  },
};

export const InsideBox: StoryObj<TextInputProps> = {
  args: {
    prefix: "site.com/",
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={"label"}
          content={"Email Address"}
          className="flex flex-col gap-1"
        >
          {Story()}
        </Box>
      );
    },
  ],
};
