import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@isaias-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: "https://avatars.githubusercontent.com/u/3528085?v=4",
    alt: "Joao Doe",
  },
};

export const FallbackImg: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: ''
  }
};
