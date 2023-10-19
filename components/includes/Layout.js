import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import HeaderOuter from './HeaderOuter';
import Disclaimer from './Disclaimer';
import { device } from '~/config/utils';
import ClientFooter from './ClientFooter';
import BTTButton from './BTTButton';
import styled from 'styled-components';
import Script from 'next/script';

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
    font-size: 16px;
    @media ${device.tablet} {
      font-size: 18px;

    
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

const Pixel = styled.img`
    position: absolute;
    opacity: 0;
    @media ${device.tablet} {
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
            <Disclaimer client="Singapore Tourism Board" />
            {children}
            <ClientFooter />
            <Pixel src="https://collector.brandmetrics.com/Info?pixel=2e7f61900eab46a7b37b9d210003fda0" />
                <Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
                <div id="brandmetrics-survey" className="brandmetrics-survey">
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `             window._brandmetrics = window._brandmetrics || [];
                    setTimeout(function() {
                      window._brandmetrics.push({cmd: "_forcesurvey", val: {mid:"2e7f61900eab46a7b37b9d210003fda0", style:
                      "ft_flyin_default"}});
                    }, 10000);`,
                        }}
                    ></script>
            </div>
            <Footer />
            <HeaderOuter />
        </>
    );
}
