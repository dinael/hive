
import { Title, TitleProps } from '../../components/title/Title'

export default {
  title: 'Basic/Title',
  component: Title,
  tags: ['autodocs'],
  argType: {
    level: { name: 'Level heading',
      control: {
        type:'select',
        options: [1, 2, 3, 4, 5, 6],
        min: 0,
        max: 6,
      },
    },
    size: { name: 'Size',
      control: {
        type: 'select',
        options: ['xs','s', 'm', 'l', 'xl', 'xxl'],
      },
    },
    text: { name: 'Text', control: 'text' },
    ellipsis: { name: 'Ellipsis', control: 'bolean' },
    a11yLength: { name: 'Text length for a11y', control: 'bolean' },
    className: { name: 'ClassName', control: 'text' },
  }
}


export const Default = (args: TitleProps) => ([
  <Title {...args} />
])

Default.args = {
  level: 3,
  size: 'm',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero metus, pretium in metus in, accumsan lobortis turpis. ',
  ellipsis: false,
  a11yLength: false,
  className: '',
}
