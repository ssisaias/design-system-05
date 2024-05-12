import type { StoryObj, Meta } from "@storybook/react";
import { Box, TextArea, TextAreaProps } from "@isaias-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
} as Meta<TextAreaProps>;


export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type something...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  },
};

export const InsideBox: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type something...",
  },
  decorators: [(Story) => {
    return (
      <Box as={'div'} content={"Observations"}>
        {Story()}
      </Box>
    )
  }]
};
