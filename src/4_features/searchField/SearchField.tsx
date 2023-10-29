import { FormEvent } from 'react';
import SearchButton from './ui/SearchButton';

const SearchField = () => {
  const searchHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="pt-[24px]">
      <form onSubmit={searchHandler}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for chats"
            className="pl-[56px] py-[12px] block bg-gray-50 border border-gray-300 text-gray-900 rounded-full focus:outline-gray-500"
          />
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default SearchField;
