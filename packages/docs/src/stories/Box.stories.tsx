import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@isaias-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    as: "div",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "A wrapper for a &lt;div&gt; that can have an optional text above the children elements",
      },
    },
  },
} as Meta<BoxProps>;

export const PrimaryEmpty: StoryObj<BoxProps> = {};

export const PrimaryWithContent: StoryObj<BoxProps> = {
  args: {
    content: "Some text",
  },
};
