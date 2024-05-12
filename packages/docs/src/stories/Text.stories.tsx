import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@isaias-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione aut voluptatem soluta eaque impedit accusamus amet, nostrum perspiciatis obcaecati, natus ex placeat quidem enim minus esse dolor! Voluptates, blanditiis",
  },
  argTypes: {
    size: {
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
      control: {
        type: 'select'
      }
    }
  }
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