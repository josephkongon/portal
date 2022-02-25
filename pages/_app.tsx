import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import { theme } from '../theme';
import { NavBar, Footer, Header } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header pageName={'Home'} />
        <Grid gridAutoRows='auto 1fr auto'>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </Grid>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
