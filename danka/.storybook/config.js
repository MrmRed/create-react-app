import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Title.js');

  // You can require as many stories as you need.
}

configure(loadStories, module);