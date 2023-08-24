import { ValidationMessage, ValidationMessageProps } from '../../../components/validationmessage/ValidationMessage'

export default {
  title: 'Components/Form/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    vitest: {
      testFile: "ValidationMessage.test.tsx"
    },
    docs: {
      description: {
        component: 'El componente **ValidationMessage** es...',
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {name: 'Message', control: 'text'},
    kind: {
      name: 'Kind',
      control: {
        type:'select',
        options: ['info','warning','error','success','help','safe']
      }
    }
  }
}

export const Default = (args: ValidationMessageProps) => ([
  <ValidationMessage {...args} />
])

Default.args = {
  message: 'This is a validation message',
  kind: 'info',
  icon: 'info-circle'
}
