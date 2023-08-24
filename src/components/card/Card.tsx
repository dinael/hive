import { FC, ReactNode, isValidElement, Children } from 'react';

import TitleCard from '../title/Title'

type SlotMap = {
  [key: string]: ReactNode[];
};

type CardProps = {
  Title: string
  TitleLevel: 2 | 3 | 4 | 5 | 6
  children: ReactNode;
};

const Card: FC<CardProps> = ({
  Title,
  TitleLevel = 3,
  children
}) => {
  const slotMap: SlotMap = {};

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const slotName = child.props.slot || 'default';
      slotMap[slotName] = [...(slotMap[slotName] || []), child];
    }
  });

  return (
    <article className="card-component">
      {slotMap['header'] &&
        <header className='card-header'>
          <TitleCard
            text={Title}
            level={TitleLevel}
            className='card-title'
          />
          {slotMap['header']}
        </header>
      }
      <div className="card-description">
        {slotMap['description']}
      </div>
      <div className="card-actions">
        {slotMap['actions']}
      </div>
    </article>
  );
};

export default Card;
