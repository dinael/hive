import { useState } from 'react';

import { Fieldset, FieldsetProps } from '@/components/fieldset/Fieldset'

import Inputfield from '@/components/inputfield/Inputfield'
import Inputselect from '@/components/inputselect/Inputselect';
import Checkbox from '@/components/checkbox/Checkbox';
import Textarea from '@/components/textarea/Textarea';
import InputRadio from '@/components/radio/Radio';
import Button from '@/components/button/Button';

export default {
  title: 'Components/Form/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  parameters: {
    vitest: {
      testFile: "Fieldset.test.tsx"
    },
    docs: {
      description: {
        component: 'El componente **Fieldset** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  argType: {
    legend: { name: 'Legend', control: 'text' },
    flat: { name: 'Flat', control: 'boolean' },
    required: { name: 'Required', control: 'boolean' },
    isRequiredText: { name: 'Required text', control: 'text' },
    legendHidden: { name: 'Legend hidden', control: 'boolean' },
  }
}

export const Default = (args: FieldsetProps) => ([
  <Fieldset {...args} />
])

Default.args = {
  legend: 'This is a legend from fieldset:',
  children: 'Form elements',
  flat: false,
  required: false,
  isRequiredText: 'This fields are Required',
  legendHidden: false,
}

//-----------------

const options = [
  { option: 'Opción 1', value: '1' },
  { option: 'Opción 2', value: '2' },
  { option: 'Opción 3', value: '3' },
]

const groupOptions = {
  'Grupo 1': [
    { option: 'Opción 4', value: '4' },
    { option: 'Opción 5', value: '5' },
  ],
  'Grupo 2': [
    { option: 'Opción 6', value: '6' },
    { option: 'Opción 7', value: '7' },
  ],
}

export const Example = (args: FieldsetProps) => {
  return (
    <Fieldset
      {...args}
      className='grid gap:2'>
    <>
      <Inputfield label={'This is a label:'} />
      <Inputselect
        label={'Select with options group:'}
        options={groupOptions}
        value="4"
        onChange={() => { }}
      />
      <Fieldset legend={'Fieldset nested:'}>
        <div>
          <Checkbox label='Option 1' />
          <Checkbox label='Option 2' />
          <Checkbox label='Option 3' />
        </div>
        <br />
        <div>
          <p>Checkbox states:</p>
          <Checkbox label='Unchecked' />
          <Checkbox label='Checked' isChecked />
          <Checkbox label='Indeterminate' indeterminate />
          <Checkbox label='Disabled' disabled />
        </div>
      </Fieldset>
      <Fieldset legend={'Fieldset nested:'}>
        <InputRadio label={'option 1'} />
        <InputRadio label={'option 2'} />
        <InputRadio label={'option 3'} />
      </Fieldset>
      <Textarea
        label={'Text area:'}
        rows={10}
      />
        <Button
          text="Summit"
          kind='fullwidth'
          variant='primary'/>
    </>
    </Fieldset>
  )
}

Example.args = {
  ...Default.args,
}
