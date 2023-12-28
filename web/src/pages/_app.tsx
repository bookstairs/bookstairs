import { useState } from 'react';

import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import App, { AppContext, AppProps, AppInitialProps } from 'next/app';
import Head from 'next/head';

import { selectedColorTheme, defaultExpiredTime } from '@/constants/cookies';
import { emotionCache } from '@/styles/emotion';
import { bookstairsTheme } from '@/styles/theme';
import { useCookie } from '@/utils/cookies';

// This is used to make Typescript happy.
type BookStairsProps = { colorScheme: ColorScheme };

const cookie = useCookie<ColorScheme>(selectedColorTheme);

const BookStairsApp = ({
  Component,
  pageProps,
  router: { locale },
  colorScheme,
}: AppProps & BookStairsProps) => {
  // Create the color theme toggle.
  const [_colorScheme, setColorScheme] = useState<ColorScheme>(colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (_colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    cookie.set(nextColorScheme, { maxAge: defaultExpiredTime });
  };

  // Add hotkeys for toggling the color scheme.
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>BookStairs</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={_colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            ...bookstairsTheme,
            colorScheme: _colorScheme,
            // day.js only supports locale in the lower case.
            datesLocale: locale || 'en',
            cursorType: 'pointer',
          }}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={emotionCache}
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
  const colorScheme = cookie.get('light', appContext.ctx);

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // Merge all the props into one.
  return { ...appProps, colorScheme };
};

export default BookStairsApp;
