export type Favicon = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

// The favicons for different browsers.
export const Favicons: Favicon[] = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/android-icon-512x512.png',
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '60x60',
    href: '/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '76x76',
    href: '/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '120x120',
    href: '/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '152x152',
    href: '/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: '180x180',
    href: '/apple-icon-180x180.png',
  },
  {
    rel: 'browserconfig',
    type: 'application/xml',
    href: '/browserconfig.xml',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'manifest',
    type: 'application/json',
    href: '/manifest.json',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '150x150',
    href: '/mstile-150x150.png',
  },
  {
    rel: 'mask-icon',
    type: 'image/svg+xml',
    href: '/safari-pinned-tab.svg',
  },
  {
    rel: 'manifest',
    type: 'application/json',
    href: '/site.webmanifest',
  },
];
