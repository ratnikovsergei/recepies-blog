import { Link } from 'react-router-dom';

export const Navbar = ({ logo }) => {
  return (
    <div className="flex justify-between items-center h-16 px-6 lg:px-12">
      <Link to="/" className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <span className="text-3xl font-['Pacifico']">Мир рецептов</span>
      </Link>

      <ul className="flex gap-7">
        <li>
          <Link to="/recipes" className="font-medium text-xl text-black">
            Рецепты
          </Link>
        </li>
        <li>
          <Link to="/articles" className="font-medium text-xl text-black">
            Статьи
          </Link>
        </li>
        <li>
          <Link to="/about" className="font-medium text-xl text-black">
            О нас
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="font-medium text-xl text-black">
            Контакты
          </Link>
        </li>
      </ul>

      <ul className="flex items-center gap-4 font-medium">
        <li>
          <Link to="/login" className="text-black px-4 py-2 rounded">
            Войти
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-black px-4 py-2 rounded">
            Регистрация
          </Link>
        </li>
      </ul>
    </div>
  );
};
