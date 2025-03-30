import { theme } from '@/lib/theme';
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://mantine-mtg.vercel.app'),
  applicationName: 'mtg',
  title: 'MTG',
  description: 'MTG Card Generator',
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
    shortcut: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  generator: 'Next.js',
  creator: 'Itai Axelrad',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'MTG',
    'Magic',
    'Gathering',
    'Card',
    'Wizards',
    'Coast',
    'Generator',
    'playing',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications position='top-center' />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
