import {
  FC,
  ReactNode,
  useState,
  ChangeEvent,
} from 'react'

import { v4 as uuid } from 'uuid'

import styles from './ListFiltered.module.scss'

import ListFilters from './ListFilters'
import ListFilteredNotFound from './listFilteredNotFund'
import List from '../list/List'

export type ListFilteredItem = {
  id?: string | number
  text: string
}

export type ListFilteredProps = {
  items: ListFilteredItem[]
  nameList?: string
  direction?: 'vertical' | 'horizontal'
  className?: string
  children?: ReactNode
  OnlySearch?: boolean
  OnlySort?: boolean
  bulletList?: 'none' | 'auto' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'
}

export const ListFiltered: FC<ListFilteredProps> = ({
  items,
  nameList,
  direction ='vertical',
  className = '',
  OnlySearch = false,
  OnlySort = false,
  bulletList,
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
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'alphabetically_asc') {
      return a.text.localeCompare(b.text)
    } else if (sortOption === 'alphabetically_desc') {
      return b.text.localeCompare(a.text)
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
      `}
      {...props}>
      <ListFilters
        className={`${styles['list-filter']}`}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        optionsSelect={optionsSelect}
        inputLabel='Search'
        selectLabel='Order by'
        title={nameList}
        onlySearch={OnlySearch}
        onlySort={OnlySort}
      />
      {sortedItems.length > 0
        ? <List
          items={sortedItems}
          aria-live='polite'
          ordered
          nameList={nameList ? nameList : `list-${uuid()}`}
          bullet={bulletList ? bulletList : 'none'}
        />
        : <ListFilteredNotFound
          className={`${styles['list-not-found']}`}
          message='Search not found'
        />

      }
    </div>
  );
};

export default ListFiltered
