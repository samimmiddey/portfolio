import { useContext, useEffect, useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navigation from './components/Navigation/Navigation';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import SuccessSnackbar from './components/UI/SuccessSnackbar';
import Footer from './components/Footer/Footer';
import BackToTop from './components/UI/BackToTop';
import { uiContext } from './components/context/ui-context';
import CreditModal from './components/UI/Modal';
import Spinner from './components/UI/Spinner';

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
	const [isLoading, setIsLoading] = useState(true);
	if (darkMode) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}

	const getMode = darkMode ? 'dark' : 'light';

	const theme = createTheme(getDesignTokens(getMode));


	// const handleLoading = () => {
	// 	setIsLoading(false);
	// }

	useEffect(() => {
		// window.addEventListener("load", handleLoading);
		// return () => window.removeEventListener("load", handleLoading);
		setTimeout(() => setIsLoading(false), 3000);
	}, []);

	if (isLoading) {
		return (
			<Spinner />
		)
	}

	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
};

export default App;