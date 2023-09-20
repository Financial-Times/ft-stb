import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import HeaderOuter from './HeaderOuter';
import Disclaimer from './Disclaimer';
import { device } from '~/config/utils';
import ClientFooter from './ClientFooter';
import BTTButton from './BTTButton';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }


  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:1.5;
    background-color: white;
    font-family: 'Roboto', sans-serif;


  }
  a {
    color: #FF7442;
    text-decoration: none;
  
  }
  a:hover {
    text-decoration: none;

  }
  button {
  }
  
  .o-footer {
    margin-top: 0;
    position: relative;
    z-index: 3;
  }

  .o-header {
    position: relative;
    z-index: 3;
  }

  
  h1 {
    margin: 0;
    line-height: 1.2;
    font-weight: 500;

    @media ${device.tablet} {
       font-size: 48px;
      }
  }


  
  h2 {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 24px;

    @media ${device.tablet} {
      }
    }
  
  p {
    font-size: 20px;
    @media ${device.tablet} {
    
      }
  }

  main {
    position: relative;
  }

  .o-cookie-message {
  }

  .o-cookie-message {
    z-index: 10;
    p {
      font-size: initial;
    }
  }
  .o-cookie-message__heading {
    h1 {
      color: black;
    }
  }
`;

// font-family: 'Inter', sans-serif;
// Light 300
// Regular 400
// Medium 500

// font-family: 'Roboto', sans - serif;
// Regular 400
// Medium 500

export default function Page({ children }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Disclaimer client="STB" />
            {children}
            <ClientFooter />
            <Footer />
            <HeaderOuter />
        </>
    );
}
