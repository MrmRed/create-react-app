import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Title from '../App';

storiesOf('App', module)
  .add('with text', () => (
    <Title>Hello, I'm a Title component</Title>
  ));