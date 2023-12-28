import { createStyles, keyframes } from '@mantine/core';

const breathAnime = keyframes({
  '0%': {
    transform: 'scale(0.9)',
  },
  '50%': {
    transform: 'scale(1.2)',
  },
  '100%': {
    transform: 'scale(0.9)',
  },
});

export const useStyles = createStyles((theme) => ({
  logo: {
    animation: `0.9s linear 0s infinite normal forwards running ${breathAnime}`,
  },
  left: {
    fill: theme.colorScheme === 'dark' ? '#FFF' : '#8B919A',
  },
  right: {
    fill: theme.colorScheme === 'dark' ? '#A0A3A6' : '#3F4D5B',
  },
}));
