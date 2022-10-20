import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  icon: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
    ':hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },
  },
}));
