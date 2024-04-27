import type { StoryObj, Meta } from "@storybook/react";
import { Box, TextInput, TextInputProps } from "@isaias-ui/react";

export default {
  title: "Typography/Text Input",
  component: TextInput,
} as Meta<TextInputProps>;


export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type something...",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  },
};

export const Prefixed: StoryObj<TextInputProps> = {
  args: {
    prefix: "site.com/",
  },
};

export const InsideBox: StoryObj<TextInputProps> = {
  args: {
    prefix: "site.com/",
  },
  decorators: [(Story) => {
    return (
      <Box as={'label'} content={"Email Address"}>
        {Story()}
      </Box>
    )
  }]
};
