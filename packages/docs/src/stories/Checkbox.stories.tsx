import type { StoryObj, Meta } from "@storybook/react";
import { Box, Checkbox, CheckboxProps } from "@isaias-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        story: 'A checkbox element'
      }
    }
  }
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
};

export const PrimaryWithLabel: StoryObj<CheckboxProps> = {
  decorators: [(Story) => {
    return (
      <Box as={'label'} content={"Accept"} className="flex flex-row gap-2">
        {Story()}
      </Box>
    )
  }],
  parameters: {
    docs: {
      description: {
        story: 'Using the Box component we can set a label for the checkbox'
      }
    }
  }
};
