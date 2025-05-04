import { SearchInput } from './components';

export const SearchPanel = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-black leading-normal:xl-leading-relaxed">
        Для тех, кто любит <span className="text-red-400">красиво</span> приготовить и{' '}
        <span className="text-orange-400">вкусно</span> поесть!
      </h1>
      <SearchInput />
    </div>
  );
};
