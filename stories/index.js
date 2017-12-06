import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import EditableDiv from '../src/components/shared/EditableDiv';
import Loading from '../src/components/shared/Loading';

storiesOf('Shared Component', module)
  .add('EditableDiv', () => {
    const onChange = _v => console.log('updated : ', _v)
    const onUpdate = _v => console.log('UPDATE value to ', _v) //trigged when press ENTER
    return <EditableDiv 
            value='I am Message'
            onChange={onChange}
            onUpdate={onUpdate}/>
  })
  .add('Loading', () => {
    return <Loading 
            isLoading={true}/>
  })
          