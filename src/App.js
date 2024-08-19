import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import SuccessSnackbar from './components/UI/SuccessSnackbar';
import BackToTop from './components/UI/BackToTop';
import { uiContext } from './context/ui-context';
import Spinner from './components/UI/Spinner';
import { Suspense } from 'react';

const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const TextScroller = React.lazy(() => import('./components/TextScroller/TextScroller'));
const About = React.lazy(() => import('./components/About/About'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Services = React.lazy(() => import('./components/Services/Services'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

const getDesignTokens = (mode) => ({
	breakpoints: {
		values: {
			xs: 0,
			xm: 375,
			sm: 650,
			md: 950,
			lg: 1250,
			xl: 1536,
		},
	},
	palette: {
		mode,
		...(mode === 'light'
			? {
				// palette values for light mode
				primary: {
					main: '#784cfb',
				},
				secondary: {
					main: '#6039d6',
				},
				text: {
					primary: '#1E1E20',
					secondary: '#868395',
					tertiary: '#a19fad',
					white: '#fff'
				},
				bg: {
					secondary: '#f8f6fe',
					card: '#fff'
				}
			}
			: {
				// palette values for dark mode
				primary: {
					main: '#6a59c0'
				},
				secondary: {
					main: '#a49ec7',
				},
				divider: '#5442af',
				background: {
					default: '#191627',
					paper: '#191627',
				},
				text: {
					primary: '#bcbac4',
					secondary: '#a09cba',
					disabled: '#bcbac4',
					white: '#bdb5e3'
				},
				bg: {
					secondary: '#211d35',
					card: '#292442'
				}
			}),
	},
	typography: {
		primary: {
			font: 'Playfair Display, serif'
		},
		secondary: {
			font: 'Montserrat, sans-serif'
		},
		fontFamily: 'Montserrat, sans-serif'
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					border: '1px solid #eceff1',
					borderRadius: '15px'
				}
			}
		},
	},
});

const App = () => {
	const { darkMode } = useContext(uiContext);
	if (darkMode) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}

	const getMode = darkMode ? 'dark' : 'light';

	const theme = createTheme(getDesignTokens(getMode));

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Spinner />}>
				<div>
					<Navigation />
					<Hero />
					<TextScroller />
					<About />
					<Skills />
					<Services />
					<Portfolio />
					<Contact />
					<Footer />
					<SuccessSnackbar />
					<BackToTop />
				</div>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;