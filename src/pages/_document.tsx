import { createGetInitialProps } from '@mantine/next';
import Document from 'next/document';

const getInitialProps = createGetInitialProps();

export default class BookStairsDocument extends Document {
  // Override the default getInitialProps to mantine based one.
  static getInitialProps = getInitialProps;
}
