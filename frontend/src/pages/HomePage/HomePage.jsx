import { SearchPanel, CategoryPanel } from '../../components';

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <SearchPanel />
        <CategoryPanel />
      </div>
    </div>
  );
};
