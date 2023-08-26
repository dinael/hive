import { Card, CardProps } from '../../../components/card/Card'

import './card-custom-styles.scss'

//  Imports to composition example
import Box from '../../../components/box/Box'
import Button from '../../../components/button/Button'
import Paragraph from '../../../components/paragraph/Paragraph'

export default {
  title: 'Components/Composed/Card',
  component: Card,
  parameters: {
    vitest: {
      // testFile: "Card.test.tsx"
    }
  },
  tags: ['autodocs'],
  argType: {
    className: {
      name: 'className:',
      control: 'text'
    },
  },
}

export const Default = (args: CardProps) => (
  <Card {...args}>
    <div slot="CardHeader">
      Custom header content
    </div>
    <p slot="CardContent">
    Custom body content
    </p>
    <div slot="CardActions">
      Custom action and call to actions section
    </div>
    <div slot="CardFooter">
      Custom footer content
    </div>
  </Card>
)

Default.args = {
  title: 'a card',
  titleLevel: 4,
  imgSrc: 'https://picsum.photos/300/100?random=1',
  imgAlt: 'A random picture',
  className: 'my-custom-styles'
}

export const CompositionExample = (args: CardProps) => ([
  <Box className='my-custom-card-styles'>
    <Card {...args}>
      <div slot="CardHeader">
        <Button
          description="Menu alt"
          icon="dots-vertical"
          iconOnly
          kind="rounded"
          onClick={() => { }}
          size="m"
          text="Button"
          variant="ghost"
        />
      </div>
      <div slot="CardContent">
        <Paragraph className='card-content-contented'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maiores facilis atque ducimus corporis.
        </Paragraph>
      </div>
      <div
        slot="CardActions"
        className='card-actions-contented'>
        <Button
          description="Menu alt"
          onClick={() => { }}
          size="m"
          text="main action"
          className="main-action"
          variant="primary"
        />
        <Button
          description="Menu alt"
          onClick={() => { }}
          size="m"
          text="alt action"
          className="alt-action"
          variant="alt"
        />
      </div>
      <div
        slot="CardFooter"
        className="card-footer-contented">
        <Paragraph className='card-footer-legal'>
          legal text Ⓡ
        </Paragraph>
      </div>
    </Card>
  </Box>
])

CompositionExample.args = {
  unstyled: true,
  title: 'a card',
  titleLevel: 4,
  imgSrc: 'https://picsum.photos/800/300?random=1',
  imgAlt: 'A random picture',
  className: 'my-custom-card-styles'
}

export const Unstyled = (args: CardProps) => (
  <Card {...args}>
    <div slot="CardHeader">Custom header content</div>
    <p slot="CardContent">Custom body content</p>
    <div slot="CardActions">Custom action and call to actions section</div>
    <div slot="CardFooter">Custom footer content</div>
  </Card>
)

Unstyled.args = {
  unstyled: true,
  title: 'a card',
  titleLevel: 4,
  imgSrc: 'https://picsum.photos/300/100?random=1',
  imgAlt: 'A random picture',
  className: 'your-custom-styles'
}

