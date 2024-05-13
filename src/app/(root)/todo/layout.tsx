import { CoursesProvider } from '@/providers/CoursesContext';

interface P {
	children: React.ReactNode;
}

const Layout: React.FC<P> = ({ children }) => {
	return <CoursesProvider>{children}</CoursesProvider>;
};
export default Layout;
