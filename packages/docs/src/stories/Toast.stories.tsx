import type { StoryObj, Meta } from "@storybook/react";
import { Toast } from "@isaias-ui/react";

export default {
  title: "Data Display/Toast",
  component: Toast,
  args: {
    theme: "dark",
    message: 'Example',
    description: 'This is a toast message'
  },
  argTypes: {
    theme: {
      options: ["light", "dark"],
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "A Toast is a non-modal, unobtrusive window element used to display brief, auto-expiring windows of information to a user. It appears above other UI elements and disappears after a short time.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "6em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Primary: StoryObj = {};

export const LightVariant: StoryObj = {
  args: {
    theme: "light",
    message: "Light variant toast",
  },
  parameters: {
    docs: {
      description: {
        story: "Toast with light variant",
      },
    },
  },
};

export const DarkVariant: StoryObj = {
  args: {
    theme: "dark",
    message: "Dark variant toast",
  },
  parameters: {
    docs: {
      description: {
        story: "Toast with dark variant",
      },
    },
  },
};
