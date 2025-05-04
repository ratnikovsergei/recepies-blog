import logo404 from '/404.png';

export const NotFoundPage = () => {
  return (
    <div className="grid h-screen place-items-center text-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
      <img
        src={logo404}
        alt="logo404"
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto"
      />
      <span className="text-lg sm:text-xl md:text-2xl mt-6 block">
        Запрашиваемая страница не найдена, проверьте правильность введенного URL-адреса
      </span>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
        <a
          href="/"
          className="text-base sm:text-xl text-primary bg-amber-900 px-4 py-2 rounded-md hover:bg-amber-700 transition"
        >
          ...или вернитесь на главную
        </a>
      </div>
    </div>
  );
};
