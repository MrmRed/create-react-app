import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import Person from '../Person/Person';

storiesOf('Person', module)
  .add('with text', () => (
    <Person name="Danka" age="29">Hello, I'm a Person component </Person>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));