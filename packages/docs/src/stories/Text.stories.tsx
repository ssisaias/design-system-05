import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@isaias-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione aut voluptatem soluta eaque impedit accusamus amet, nostrum perspiciatis obcaecati, natus ex placeat quidem enim minus esse dolor! Voluptates, blanditiis",
  },
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Medium: StoryObj<TextProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const RenderStriked: StoryObj<TextProps> = {
  args: {
    size: "lg",
    as: 's'
  },
};

export const RenderItalics: StoryObj<TextProps> = {
  args: {
    size: "lg",
    as: 'i'
  },
};

export const RenderStrong: StoryObj<TextProps> = {
  args: {
    size: "lg",
    as: 'strong'
  },
};