import type { Metadata } from 'next';
import './globals.css';
import { Notifications } from '@mantine/notifications';
import { ThemeProvider } from '@/providers/ThemeContext';
import { ModalsProvider } from '@mantine/modals';
import { MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
   title: 'neo',
   description:
      "A professional portfolio focused on me, neo. I specialize in making custom web apps and websites, and I have coding experience in TypeScript, Java, Python, and C++. I'm well-versed in frameworks like React and Next.js. Explore my projects to see my expertise in action.",
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
