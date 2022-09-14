import React, { useContext } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import SuccessSnackbar from './components/UI/SuccessSnackbar';
import BackToTop from './components/UI/BackToTop';
import { uiContext } from './components/context/ui-context';
import CreditModal from './components/UI/Modal';
import Spinner from './components/UI/Spinner';
import { Suspense } from 'react';

const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));
const Home = React.lazy(() => import('./components/Home/Home'));
const About = React.lazy(() => import('./components/About/About'));
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Services = React.lazy(() => import('./components/Services/Services'));
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Testimonial = React.lazy(() => import('./components/Testimonial/Testimonial'));
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
					primary: '#333',
					secondary: '#a19fad',
					disabled: '#868395',
				},
			}
			: {
				// palette values for dark mode
				primary: {
					main: '#5442af'
				},
				secondary: {
					main: '#8d85b9',
				},
				divider: '#5442af',
				background: {
					default: '#191627',
					paper: '#191627',
				},
				text: {
					primary: '#bcbac4',
					secondary: '#a19fad',
					disabled: '#bcbac4'
				},
			}),
	},
	typography: {
		fontFamily: 'Poppins, Abril Fatface, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
		 @font-face {
			font-family: 'Poppins, Abril Fatface';
			font-style: normal;
			font-weight: 400;
		 }
	  `,
		},
		MuiCard: {
			styleOverrides: {
				root: {
					border: '1px solid #eceff1',
					borderRadius: '10px'
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
				<Box>
					<Navigation />
					<Home />
					<About />
					<Skills />
					<Services />
					<Portfolio />
					<Testimonial />
					<Contact />
					<Footer />
					<SuccessSnackbar />
					<BackToTop />
					<CreditModal />
				</Box>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;