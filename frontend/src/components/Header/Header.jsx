import { useState } from 'react';
import { Navbar, Mobilenav } from './components/navigation';
import logo from '/logo.png';

export const Header = () => {
  const [hide, setHide] = useState('-left-[1000px]');

  const onOpen = () => {
    setHide('left-0');
  };

  const onClose = () => {
    setHide('-left-[1000px]');
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <Navbar logo={logo} />
      </div>
      <div className="min-[900px]:hidden">
        <Mobilenav logo={logo} hide={hide} onClose={onClose} onOpen={onOpen} />
      </div>
    </>
  );
};
