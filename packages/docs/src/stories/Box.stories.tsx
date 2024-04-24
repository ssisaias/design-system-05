import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@isaias-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    content: 'abc'
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {
    content: "primary"
  },
};
