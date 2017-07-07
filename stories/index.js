import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Hello from '../src/components/Hello';


storiesOf('Hello', module)
  .add('Click', () => <Hello 
          onClick={action('clicked')} 
          message='I am Message'/>)
