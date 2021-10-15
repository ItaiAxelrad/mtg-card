import Head from 'next/head';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import fetcher from '@lib/fetcher';
import BaseLayout from '@components/BaseLayout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@lib/createEmotionCache';
import { red } from '@mui/material/colors';
import '@styles/global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // Update the theme only if the mode changes
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ['Cardo', 'serif'].join(','),
        },
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: { main: red[500] },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <CacheProvider value={emotionCache}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </ThemeProvider>
      </CacheProvider>
    </SWRConfig>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
