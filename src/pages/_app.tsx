import { useState } from 'react';

import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { getCookie, setCookie } from 'cookies-next';
import App, { AppContext, AppProps, AppInitialProps } from 'next/app';
import Head from 'next/head';

import { selectedColorTheme, defaultExpiredTime } from '@/constants/cookies';
import { themeCache } from '@/pages/emotion';

// TODO Add new server side properties here.
// This is used to make Typescript happy.
type BookStairsProps = { colorScheme: ColorScheme };

const BookStairsApp = (props: AppProps & BookStairsProps) => {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie(selectedColorTheme, nextColorScheme, { maxAge: defaultExpiredTime });
  };

  return (
    <>
      <Head>
        <title>BookStairs</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            cursorType: 'pointer',
          }}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={themeCache}
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

BookStairsApp.getInitialProps = async (
  appContext: AppContext
): Promise<BookStairsProps & AppInitialProps> => {
  const colorScheme = (getCookie(selectedColorTheme, appContext.ctx) || 'light') as ColorScheme;

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // Merge all the props into one.
  return { ...appProps, colorScheme };
};

export default BookStairsApp;
