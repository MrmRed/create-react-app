import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Title.js');
  require('../src/stories/Test.js');

  // You can require as many stories as you need.
}

configure(loadStories, module);