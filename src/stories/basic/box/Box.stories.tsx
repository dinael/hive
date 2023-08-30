import { Box, BoxProps } from '@/components/box/Box'

export default {
  title: 'Components/Basic/Box',
  component: Box,
  parameters: {
    vitest: {
      // testFile: "Box.test.tsx"
    }
  },
  tags: ['autodocs'],
  argType: {
    border: {
      name: 'Border:',
      control: {
        type: 'select',
        options: [
          'none',
          'primary',
          'alt',
          'dark'
        ]
      }
    },
    elevation: {
      name: 'Elevation:',
      control: {
        type: 'select',
        options: [
          'xxs',
          'xs',
          's',
          'm',
          'l',
          'xl',
          'xxl',
          'pop',
          'default',
          'none'
        ]
      }
    },
    radius: {
      name: 'Radius:',
      control: {
        type: 'select',
        options: [
          'none',
          'primary',
          'alt',
          'dark'
        ]
      }
    },
    space: {
      name: 'Space:',
      control: {
        type: 'select',
        options: [
          'none',
          'quarter',
          'half',
          1,
          2,
          3,
          4
        ]
      }
    },
    paper: {
      name: 'Paper:',
      control: {
        type: 'boolean'
      }
    },
    className: { name: 'className', control: 'text' }
  },
}

export const Default = (args: BoxProps) => ([
  <Box
    style={{ width: "400px", height: '400px' }}
    {...args}>
  </Box>
])

Default.args = {
  className: 'my-custom-styles'
}

export const Paper = (args: BoxProps) => ([
  <Box
    style={{ width: "400px", height: '400px' }}
    {...args}>
  </Box>
])

Paper.args = {
  paper: true,
  className: 'my-custom-styles'
}
