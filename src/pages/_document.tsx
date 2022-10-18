import { createGetInitialProps } from '@mantine/next';
import Document from 'next/document';

import { themeCache } from '@/pages/emotion';

const getInitialProps = createGetInitialProps(themeCache);

export default class BookStairsDocument extends Document {
  // Override the default getInitialProps to mantine based one.
  static getInitialProps = getInitialProps;
}
