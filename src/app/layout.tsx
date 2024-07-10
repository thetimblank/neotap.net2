import type { Metadata } from 'next';
import { Mukta } from 'next/font/google';
import { ThemeProvider } from '@/providers/Theme';
import '@/styling/globals.css';
import Animations from '@/lib/animations/lazy';

export const metadata: Metadata = {
	title: "neotap: Tim's Portfolio - Full Stack Web Developer & Programmer",
	description:
		"A professional portfolio focused on me, Tim Blank. I specialize in making custom web apps and websites, and I have coding experience in TypeScript, Java, Python, Rust. I'm well-versed in frameworks like React and Next.js. Explore my projects to see my expertise in action.",
	keywords: [
		'full stack, front end, backend developer',
		'software engineer portfolio to hire',
		'web developer',
		'portfolio',
		'creative coder',
		'programmer',
		'Tim Blank',
		'web development',
		'unique projects',
		'typescript',
		'rust nextjs react developer',
	],
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
