import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  toggle: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },
}));
