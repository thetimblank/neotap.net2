import type { Metadata } from 'next';
import { Mukta } from 'next/font/google';
import { ThemeProvider } from '@/providers/Theme';
import '@/styling/globals.css';
import Animations from '@/lib/animations/lazy';

export const metadata: Metadata = {
	title: 'neotap.net',
	description: 'neotap.net',
	keywords: ['neotap.net'],
};

const font = Mukta({ weight: ['400', '800'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<ThemeProvider font={font.className}>
				<Animations>{children}</Animations>
			</ThemeProvider>
		</html>
	);
}
