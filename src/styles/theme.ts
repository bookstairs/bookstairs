import { MantineThemeOverride } from '@mantine/core';

// The basic fonts for main chinese and english users.
// We may add new fonts like "明体" in japanese.
const themeFonts = [
  '-apple-system',
  'Segoe UI',
  'SegoeUI',
  'Microsoft YaHei',
  '微软雅黑',
  'Roboto',
  'Helvetica Neue',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
];

// The monospace for code, kbd and prism based fonts.
const themeMonoFonts = [
  'ui-monospace',
  'SFMono-Regular',
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace',
];

// Generate a font str by the given font sets.
const fontFamily = (fonts: string[]): string =>
  fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');

// Default theme for bookstairs.
export const bookstairsTheme: MantineThemeOverride = {
  focusRing: 'auto',
  respectReducedMotion: true,
  cursorType: 'pointer',
  primaryColor: 'blue',
  fontFamily: fontFamily(themeFonts),
  transitionTimingFunction: 'ease',
  fontFamilyMonospace: fontFamily(themeMonoFonts),
  // We won't support rtl.
  dir: 'ltr',
  loader: 'oval',
  headings: {
    fontFamily: fontFamily(themeFonts),
  },
};
