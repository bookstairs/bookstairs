import Link from 'next/link';

import { BookStairsLogo } from '@/components/Logo';

export const HeaderLogo = () => (
  <Link href="/">
    <BookStairsLogo />
  </Link>
);
