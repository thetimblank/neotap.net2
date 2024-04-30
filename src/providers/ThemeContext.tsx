'use client';

import { useColorScheme } from '@mantine/hooks';
import { createContext, useEffect, useState } from 'react';

export interface ThemeContextValues {
   changeTheme: (to: ThemeNames) => void;
   theme: Themes;
}

export const ThemeContext = createContext<ThemeContextValues | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const systemScheme = useColorScheme();

   const [theme, setTheme] = useState<Themes>({
      name: 'system',
      value: 'dark',
   });

   useEffect(() => {
      changeTheme(systemScheme);
   }, [systemScheme]);

   const changeTheme = (to: ThemeNames): void => {
      if (to === 'system') {
         setTheme({ ...theme, value: systemScheme });
         return;
      }

      setTheme({ name: to, value: to });
   };

   return (
      <ThemeContext.Provider value={{ changeTheme, theme }}>
         <body className={`mount ${theme.value}`}>{children}</body>
      </ThemeContext.Provider>
   );
};
