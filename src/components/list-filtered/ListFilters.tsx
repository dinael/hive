import { FC, ChangeEvent } from 'react';

import styles from './ListFiltered.module.scss'

import Input from '@/components/inputfield/Inputfield';
import Select from '@/components/inputselect/Inputselect';


interface ListFiltersProps {
  setSearchQuery: (query: string) => void;
  handleSortChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionsSelect: { option: string; value: string }[];
  className?: string
  inputLabel: string
  inputId?: string
  searchQuery: string
  inputTextError?: string
  selectLabel: string
  sortOption: string
  title?: string
  onlySearch?: boolean
  onlySort?: boolean
}

const ListFilters: FC<ListFiltersProps> = ({
  setSearchQuery,
  handleSortChange,
  sortOption,
  inputLabel,
  inputId,
  inputTextError = 'This is a error',
  searchQuery,
  selectLabel,
  optionsSelect,
  title,
  onlySearch = false,
  onlySort = false,
  className,
}) => {
  return (
    <div className={className}>
      {title
        ? <p className={`${styles['list-filter-title']}`}>
            {title}
          </p>
        : ''
      }
      {onlySort === false
        ? <Input
          className={`${styles['list-filter-input']}`}
          errorText={inputTextError}
          id={inputId}
          label={inputLabel}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          type="search"/>
        : ''
      }
      {onlySearch === false &&
        <Select
        className={`${styles['list-filter-select']}`}
          errorText="This is an error"
          id=""
          label={selectLabel}
          options={optionsSelect}
          value={sortOption}
          onChange={handleSortChange}
        />
      }
    </div>
  );
};

export default ListFilters;
