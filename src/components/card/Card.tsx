import { FC, ReactNode, isValidElement, Children } from 'react';

import styles from './Card.module.scss'

import CardTitle from '../title/Title'
import CardImg from '../image/Image'

type SlotMap = {
  [key: string]: ReactNode[];
};

export type CardProps = {
  title: string
  titleLevel: 2 | 3 | 4 | 5 | 6
  imgSrc?: string
  imgAlt?: string
  className: string
  unstyled: boolean
  children: ReactNode;
};

export const Card: FC<CardProps> = ({
  title,
  titleLevel = 3,
  imgSrc,
  imgAlt = '',
  className,
  unstyled,
  children,
  ...props
}) => {
  const slotMap: SlotMap = {};

  const cardStyles = `
    ${!unstyled ? styles['card-component'] : ''}
    ${className || ''}
  `

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const slotName = child.props.slot || 'default';
      slotMap[slotName] = [...(slotMap[slotName] || []), child];
    }
  });

  return (
    <article className={cardStyles}
      {...props}>
      <header className='card-header'>
        <CardTitle
          text={title}
          level={titleLevel}
          className={'card-title'}/>
        {slotMap['CardHeader']}
      </header>
      {imgSrc &&
        <CardImg
          alt={imgAlt}
          className={'card-img'}
          fit="cover"
          ratio="none"
          src={imgSrc} />
      }
      <section className="card-content">
        {slotMap['CardContent'] && (
          <>
            {slotMap['CardContent']}
          </>
        )}
        </section>
      {slotMap['CardActions'] &&
        <div className="card-actions">
          {slotMap['CardActions']}
        </div>
      }
      {slotMap['CardFooter'] &&
        <footer className="card-footer">
          {slotMap['CardFooter']}
        </footer>
      }
    </article>
  );
};

export default Card
