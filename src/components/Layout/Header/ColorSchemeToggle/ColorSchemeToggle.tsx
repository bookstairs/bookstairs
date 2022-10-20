import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import useTranslation from 'next-translate/useTranslation';

import { useStyles } from '@/components/Layout/Header/Header.styles';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <Tooltip label={t(colorScheme === 'dark' ? 'tooltips.lightMode' : 'tooltips.darkMode')}>
      <ActionIcon onClick={() => toggleColorScheme()} size="xl" className={classes.icon}>
        {colorScheme === 'dark' ? (
          <IconSun size={20} stroke={1.5} />
        ) : (
          <IconMoonStars size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default ColorSchemeToggle;
