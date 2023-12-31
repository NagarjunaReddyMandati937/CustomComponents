import { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import EpGenericCustomMobile from './index.jsx';

export default {
  title: 'EpGenericCustomMobile',
  decorators: [withKnobs],
  component: EpGenericCustomMobile
};

export const baseEpGenericCustomMobile = () => {
  const [value, setValue] = useState('test value');

  const props = {
    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, value) => {
              setValue(value);
            }
          };
        },
        getStateProps: () => {
          return { value: '.name' };
        }
      };
    },
    value,
    placeholder: text('Placeholder', 'Test placeholder'),
    disabled: boolean('Disabled', false),
    readOnly: boolean('Disabled', false),
    required: boolean('Disabled', false),
    label: text('Label', 'Sample Label'),
    testId: text('Test id', 'text-12344566')
  };

  return (
    <>
      <EpGenericCustomMobile {...props} />
    </>
  );
};
