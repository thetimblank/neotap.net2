import type { Metadata } from 'next';
import './globals.css';
import { Notifications } from '@mantine/notifications';
import { ThemeProvider } from '@/providers/ThemeContext';
import { ModalsProvider } from '@mantine/modals';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
   title: 'Steam Bazaar',
   description:
      'Unlock your trading potential with our expertly curated Counter-Strike skin flipping strategies, maximizing your profits in the Counter-Strike market.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <ThemeProvider>
            <MantineProvider>
               <Notifications autoClose={5000} />
               <ModalsProvider>{children}</ModalsProvider>
            </MantineProvider>
         </ThemeProvider>
      </html>
   );
}
