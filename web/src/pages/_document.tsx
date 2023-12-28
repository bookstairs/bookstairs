import { createGetInitialProps } from '@mantine/next';
import Document from 'next/document';

import { emotionCache } from '@/styles/emotion';

const getInitialProps = createGetInitialProps(emotionCache);

export default class BookStairsDocument extends Document {
  // Override the default getInitialProps to mantine based one.
  static getInitialProps = getInitialProps;
}
