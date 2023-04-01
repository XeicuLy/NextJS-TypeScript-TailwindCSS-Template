import { FC, useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export const ChangeThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      <button
        aria-label='DarkModeToggle'
        type='button'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && <>{theme === 'dark' ? <BsSun /> : <BsMoon />}</>}
      </button>
    </>
  );
};
