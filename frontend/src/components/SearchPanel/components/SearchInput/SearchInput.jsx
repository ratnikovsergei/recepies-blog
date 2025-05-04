import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchInput = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    const searchValue = value.trim();
    if (searchValue) {
      navigate(`/search?search=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <form
      onSubmit={searchSubmit}
      className="bg-white p-4 rounded relative flex items-center"
    >
      <IoSearchOutline className="w-6 h-6 mr-2 text-neutral-300" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Найти рецепт"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none w-full placeholder:text-gray-500"
      />
    </form>
  );
};
