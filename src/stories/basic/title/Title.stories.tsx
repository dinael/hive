
import { Title, TitleProps } from '../../../components/title/Title'

export default {
  title: 'Components/Basic/Title',
  component: Title,
  parameters: {
    vitest: {
      testFile: "Title.test.tsx"
    }
  },
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

export const Levels = () => ([
    <section>
      <div className={''}>
          <p>Ascendent Ordered:</p>
          <Title
            level={1}
            size={'xxl'}
            text={'Title H1 / Size XXL'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={2}
            size={'xl'}
            text={'Title H2 / Size XL'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={3}
            size={'l'}
            text={'Title H3 / Size L'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={4}
            size={'m'}
            text={'Title H4 / Size M'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={5}
            size={'s'}
            text={'Title H5 / Size S'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={6}
            size={'xs'}
            text={'Title H6 / Size XS'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
        </div>
        <div className={''}>
          <p>Descendent Ordered:</p>
          <Title
            level={1}
            size={'xs'}
            text={'Title H1 / Size XS'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={2}
            size={'s'}
            text={'Title H2 / Size S'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={3}
            size={'m'}
            text={'Title H3 / Size M'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={4}
            size={'l'}
            text={'Title H4 / Size L'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={5}
            size={'xl'}
            text={'Title H5 / Size XL'}
            elipsis={false}
            a11yLength={false}
            className={''}
          />
          <Title
            level={6}
            size={'xl'}
            text={'Title H6 / Size XXL'}
            ellipsis={false}
            a11yLength={false}
            className={''}
          />
      </div>
    </section>
])
