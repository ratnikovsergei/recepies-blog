import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchInput } from './../../components/SearchPanel/components/SearchInput/SearchInput';
import { RecipeCard } from '../../components';

export const SearchPage = () => {
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get('search');
    setQuery(queryParam);
  }, [location.search]);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/api/recipes/search`, {
          params: { search: query },
        });
        setRecipes(response.data.data.recipes);
      } catch (error) {
        setError(error.message || 'Не удалось загрузить данные. Попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [query]);

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="mb-10 md:w-1/2 mx-auto">
        <SearchInput />
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Результаты по запросу: "{query}"
      </h2>

      {loading ? (
        <p className="text-center">Загрузка...</p>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center">Ничего не найдено.</p>
      )}
    </div>
  );
};
