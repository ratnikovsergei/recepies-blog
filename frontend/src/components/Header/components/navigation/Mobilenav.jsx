import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { RiCloseFill } from 'react-icons/ri';

export const Mobilenav = ({ logo, hide, onClose, onOpen }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <Link href="/" className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="text-2xl font-['Pacifico']">Мир рецептов</p>
      </Link>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3BottomRight className="w-7 h-7" />
      </button>

      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hide} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-32">
          <RiCloseFill className="w-7 h-7" />
        </button>

        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/recipes" className="font-medium text-black text-2xl">
                Рецепты
              </Link>
            </li>
            <li>
              <Link to="/articles" className="font-medium text-black text-2xl">
                Статьи
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium text-black text-2xl">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="font-medium text-black text-2xl">
                Контакты
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <Link
                to="/login"
                className="text-black px-4 py-2 rounded border cursor-pointer"
              >
                Войти
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-black px-4 py-2 rounded border cursor-pointer"
              >
                Регистрация
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
