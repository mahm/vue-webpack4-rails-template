import { configure, addDecorator } from '@storybook/vue';
import { setDefaults } from 'storybook-addon-vue-info';
import VueInfoAddon from 'storybook-addon-vue-info';
import 'babel-polyfill';

addDecorator(VueInfoAddon);

setDefaults({
  header: false
});

const loadStories = () => {
  const req = require.context(
    '../app/frontend/stories',
    true,
    /\.stories\.js$/
  );
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
