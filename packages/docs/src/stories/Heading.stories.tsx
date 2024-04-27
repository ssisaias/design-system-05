import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@isaias-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione aut voluptatem soluta eaque impedit accusamus amet, nostrum perspiciatis obcaecati, natus ex placeat quidem enim minus esse dolor! Voluptates, blanditiis",
  },
} as Meta<HeadingProps>;

export const Medium: StoryObj<HeadingProps> = {
  args: {
    size: "md",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const RenderH1: StoryObj<HeadingProps> = {
  args: {
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'rendering as h1'
      }
    }
  }
};

export const RenderH2: StoryObj<HeadingProps> = {
  parameters: {
    docs: {
      description: {
        story: 'By default, it renders as h2 tag'
      }
    }
  }
};