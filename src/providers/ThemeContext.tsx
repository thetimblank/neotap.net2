'use client';

import { useColorScheme } from '@mantine/hooks';
import { createContext, useState } from 'react';

export interface ThemeContextValues {
   changeTheme: (to: ThemeSelection) => void;
   themeName: ThemeSelection;
   theme: Themes;
}

export const ThemeContext = createContext<ThemeContextValues | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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

   return (
      <ThemeContext.Provider value={{ changeTheme, theme, themeName }}>
         <body className={`mount ${theme}`}>{children}</body>
      </ThemeContext.Provider>
   );
};
