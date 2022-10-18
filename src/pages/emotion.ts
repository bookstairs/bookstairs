import { createEmotionCache } from '@mantine/core';

export const themeCache = createEmotionCache({
  key: 'bookstairs-theme-cache',
  prepend: true,
});
