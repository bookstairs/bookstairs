import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  button: {
    width: 34,
    height: 34,
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
    },
  },
  menu: {
    width: 66,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedMenuItem: {
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[4],
    fontWeight: 'bold',
  },
}));
