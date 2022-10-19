import { ColorScheme, MantineTheme } from '@mantine/core';

import { BookStairsTheme, darkTheme, lightTheme } from '@/themes/presets';

export const bookstairsTheme = (colorScheme: ColorScheme): BookStairsTheme =>
  colorScheme === 'light' ? lightTheme : darkTheme;

// export const createTheme = (colorScheme: ColorScheme): MantineTheme => {
//   const bookStairsTheme = bookstairsTheme(colorScheme);
// };
