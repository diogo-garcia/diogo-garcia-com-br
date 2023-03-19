import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';

//import AppBar from './modules/views/AppBar';
import Header from './modules/views/Header';
import MyExperience from './modules/views/MyExperience';
import AboutMe from './modules/views/AboutMe';
//import withRoot from './modules/withRoot';
//import AboutMeFucked from './modules/views/AboutMe_fucked';
import Footer from './modules/views/Footer';
import ContactMe from './modules/views/ContactMe'

import './i18n';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import RobotoCondensed300eot from './fonts/roboto-condensed-v25-latin/roboto-condensed-v25-latin-300.eot';
import RobotoCondensed300eotie from './fonts/roboto-condensed-v25-latin/roboto-condensed-v25-latin-300.eot?#iefix';
import RobotoCondensed300woff2 from './fonts/roboto-condensed-v25-latin/roboto-condensed-v25-latin-300.woff2';
import RobotoCondensed300woff from './fonts/roboto-condensed-v25-latin/roboto-condensed-v25-latin-300.woff';
import RobotoCondensed300ttf from './fonts/roboto-condensed-v25-latin/roboto-condensed-v25-latin-300.ttf';
import RobotoCondensed300svg from './fonts/roboto-condensed-v25-latin/roboto-condensed-v25-latin-300.svg#RobotoCondensed';

const THEME = createTheme({
  typography: {
   "fontFamily": `'Roboto Condensed',sans-serif`
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-weight: 300;
          src: url(${RobotoCondensed300eot}); /* IE9 Compat Modes */
          src: local(''),
              url(${RobotoCondensed300eotie}) format('embedded-opentype'), /* IE6-IE8 */
              url(${RobotoCondensed300woff2}) format('woff2'), /* Super Modern Browsers */
              url(${RobotoCondensed300woff}) format('woff'), /* Modern Browsers */
              url(${RobotoCondensed300ttf}) format('truetype'), /* Safari, Android, iOS */
              url(${RobotoCondensed300svg}) format('svg'); /* Legacy iOS */
        }
      `,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={THEME}>
    <CssBaseline />
    <Header />
    <AboutMe />
    <MyExperience />
    <ContactMe />
    <Footer />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
