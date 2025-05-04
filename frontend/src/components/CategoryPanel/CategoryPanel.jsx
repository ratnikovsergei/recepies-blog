import { CategoryItem } from './components';

export const CategoryPanel = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <CategoryItem
        name="Завтраки"
        href="/categories/breakfast"
        bgColor="#f0f5c4"
        color="#59871f"
      />
      <CategoryItem
        name="Обеды"
        href="/categories/lunch"
        bgColor="#efedfa"
        color="#3c3a8f"
      />
      <CategoryItem
        name="Салаты"
        href="/categories/salads"
        bgColor="#e5f7f3"
        color="#1f8787"
      />
      <CategoryItem
        name="Десерты"
        href="/categories/desserts"
        bgColor="#e8f5fa"
        color="#397a9e"
      />
      <CategoryItem
        name="Закуски"
        href="/categories/sides"
        bgColor="#feefc9"
        color="#d16400"
      />
      <CategoryItem
        name="Напитки"
        href="/categories/drinks"
        bgColor="#ffeae3"
        color="#f0493e"
      />
    </div>
  );
};
