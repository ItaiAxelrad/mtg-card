import Head from 'next/head';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import { Provider } from 'next-auth/client';
import fetcher from '@lib/fetcher';
import BaseLayout from '@components/BaseLayout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deepmerge } from '@mui/utils';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@lib/createEmotionCache';
import globalTheme, { getDesignTokens } from '@styles/theme';
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
        <Provider
          // Provider options are not required but can be useful in situations where
          // you have a short session maxAge time. Shown here with default values.
          options={{
            // Client Max Age controls how often the useSession in the client should
            // contact the server to sync the session state. Value in seconds.
            // e.g.
            // * 0  - Disabled (always use cache value)
            // * 60 - Sync session state with server if it's older than 60 seconds
            clientMaxAge: 0,
            // Keep Alive tells windows / tabs that are signed in to keep sending
            // a keep alive request (which extends the current session expiry) to
            // prevent sessions in open windows from expiring. Value in seconds.
            //
            // Note: If a session has expired when keep alive is triggered, all open
            // windows / tabs will be updated to reflect the user is signed out.
            keepAlive: 0,
          }}
          session={pageProps.session}
        >
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </SWRConfig>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
