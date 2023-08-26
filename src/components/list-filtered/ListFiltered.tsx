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
  className?: string
  children?: ReactNode
  OnlySearch?: boolean
  OnlySort?: boolean
  bullet?: 'none' | 'auto' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha'
}

export const ListFiltered: FC<ListFilteredProps> = ({
  items,
  nameList,
  className = '',
  OnlySearch = false,
  OnlySort = false,
  bullet,
  children,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('top');

  if (!items) {
    return <div>Loading...</div>;
  }

  const filteredItems = items.filter(
    (item) =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'alphabetically_asc') {
      return a.text.localeCompare(b.text);
    } else if (sortOption === 'alphabetically_desc') {
      return b.text.localeCompare(a.text);
    }
    return 0;
  });

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
  ];

  const showList = sortedItems.length > 0;

  return (
    <div
      className={`
        ${styles['list-filtered-component']}
        ${className || className}`}
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
      {children || (
        showList ? (
          <List
            items={sortedItems}
            aria-live='polite'
            ordered
            nameList={nameList ? nameList : `list-${uuid()}`}
            bullet={bullet ? bullet : 'none'}
          />
        ) : (
          <ListFilteredNotFound
            className={`${styles['list-not-found']}`}
            message='Search not found'
          />
        )
      )}
    </div>
  );
};

export default ListFiltered
