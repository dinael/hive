import { FC, ChangeEvent } from 'react';
import Input from '@/components/inputfield/Inputfield';
import Select from '@/components/inputselect/Inputselect';

interface ListFilterProps {
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
}

const ListFilter: FC<ListFilterProps> = ({
  setSearchQuery,
  handleSortChange,
  sortOption,
  inputLabel,
  inputId,
  inputTextError = 'This is a error',
  searchQuery,
  selectLabel,
  optionsSelect,
  className
}) => {
  return (
    <div className={className}>
      <Input
        className='list-filter-input'
        errorText={inputTextError}
        id={inputId}
        label={inputLabel}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        type="search"
      />
      <Select
        className='list-filter-select'
        errorText="This is an error"
        id=""
        label={selectLabel}
        options={optionsSelect}
        value={sortOption}
        onChange={handleSortChange}
      />
    </div>
  );
};

export default ListFilter;
