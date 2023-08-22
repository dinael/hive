import {
  FC,
  ReactNode,
  useState,
  ChangeEvent,
} from 'react'

import { v4 as uuid } from 'uuid'

import styles from './ListFiltered.module.scss'

import ListFilter from './ListFilter'
import ListFilteredNotFound from './listFilteredNotFund'

export type ListFilteredItem = {
  id?: string | number
  title: string
}

export type ListFilteredProps = {
  items: ListFilteredItem[]
  nameList?: string
  direction?: 'vertical' | 'horizontal'
  className?: string
  children?: ReactNode
}

export const ListFiltered: FC<ListFilteredProps> = ({
  items,
  nameList,
  direction ='vertical',
  className = '',
  children,
  ...props
}) => {

  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('top')
  const [alphabeticalOrder, setAlphabeticalOrder] = useState<'asc' | 'desc'>('asc');

  if (!items) {
    return <div>Loading...</div>
  }

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'alphabetically_asc') {
      return a.title.localeCompare(b.title)
    } else if (sortOption === 'alphabetically_desc') {
      return b.title.localeCompare(a.title)
    }
    return 0
  })

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value as typeof sortOption);
  };

  const optionsSelect = [
    {
      option: 'Default',
      value: 'default'
    },
    {
      option: 'A to Z',
      value: 'alphabetically_asc'
    },
    {
      option: 'Z to A',
      value: 'alphabetically_desc'
    }
  ]

  return (
    <div
      className={`
        ${styles['list-filtered-component']}
        ${direction === 'horizontal' ? styles.horizontal : ''}
        ${className && className}
      `}>
      <ListFilter
        className={`${styles['list-filter']}`}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        optionsSelect={optionsSelect}
        inputLabel='Search'
        selectLabel='Order by'
      />
      {sortedItems.length > 0
        ? <ol
            className={`
              ${styles['list']}
            `}
            role='list'
            aria-live='polite'
            aria-label={nameList ? nameList : `list-${uuid()}`}>
            {sortedItems.map((item) => (
              <li
                className={`${styles['list-item']}`}
                key={item.id ? item.id : uuid()}
                role="listitem">
              {children
                ? children
                  : <div className={`${styles['list-item-default']}`}>
                      {item.title} - {item.id}
                    </div>
              }
              </li>
            ))}
          </ol>
        : <ListFilteredNotFound
            className={`${styles['list-not-found']}`}
            message='Search not found'
          />
      }
    </div>
  );
};

export default ListFiltered
