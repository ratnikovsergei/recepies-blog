import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/api/recipes/${id}`);
        setRecipe(response.data.data);
      } catch (error) {
        setError(error.message || 'Ошибка получения данных');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto rounded-xl mb-6 max-h-[500px] object-cover"
        />
      )}

      <div className="mb-4">
        <p className="text-gray-500 mb-2">
          Категория: <span className="font-medium">{recipe.category}</span>
        </p>
        <p className="text-gray-500 mb-2">
          Автор: <span className="font-medium">{recipe.author?.login}</span>
        </p>
        <h2 className="text-2xl font-semibold mb-2">Ингредиенты:</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ing, index) => (
            <li key={index}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Инструкции по приготовлению:</h2>
        <p className="whitespace-pre-line">{recipe.instructions}</p>
      </div>
    </div>
  );
};
