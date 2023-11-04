'use client';

import { useColorScheme } from '@mantine/hooks';
import { createContext, useState } from 'react';

export interface ThemeContextValues {
   changeTheme: (to: ThemeSelection) => void;
   themeName: ThemeSelection;
   theme: Themes;
   changeScrollLock: (to: boolean) => void;
   scrollLock: boolean;
}

export const ThemeContext = createContext<ThemeContextValues | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const [scrollLock, setScrollLock] = useState<boolean>(false);
   const [theme, setTheme] = useState<Themes>('dark');
   const [themeName, setThemeName] = useState<ThemeSelection>('dark');
   const colorScheme = useColorScheme();

   const changeTheme = (to: ThemeSelection) => {
      if (to === 'system') {
         setTheme(colorScheme);
         setThemeName('system');
         return;
      }

      setTheme(to);
      setThemeName(to);
   };

   const changeScrollLock = (to: boolean) => {
      setScrollLock(to);
   };

   return (
      <ThemeContext.Provider value={{ changeTheme, theme, themeName, changeScrollLock, scrollLock }}>
         <body className={`mount ${theme}`} style={{ overflowY: scrollLock ? 'hidden' : 'scroll' }}>
            {children}
         </body>
      </ThemeContext.Provider>
   );
};
