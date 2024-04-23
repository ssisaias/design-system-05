import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming/create';

addons.setConfig({
  theme: themes.dark,
});