import { Link } from 'react-router-dom';

export const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl w-full sm:w-[300px]">
      <Link to={`/recipes/${recipe.id}`}>
        <img
          src={`/${recipe.image}`}
          alt={recipe.title}
          className="w-full h-50 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
          <p className="text-sm text-gray-500 capitalize">{recipe.category}</p>
        </div>
      </Link>
    </div>
  );
};
