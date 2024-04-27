import type { StoryObj, Meta } from "@storybook/react";
import { Multistep, MultistepProps } from "@isaias-ui/react";

export default {
  title: "Form/Multistep",
  component: Multistep,
  args: {
    size: 4,
    currentStep: 1
  }
} as Meta<MultistepProps>;


export const Default: StoryObj<MultistepProps> = {
  args: {
    
  },
};

