import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import useTranslation from 'next-translate/useTranslation';

import { useStyles } from '@/components/Layout/Header/Header.styles';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation('common');
  const { classes } = useStyles();

  return (
    <Tooltip
      label={t(colorScheme === 'dark' ? 'tooltips.lightMode' : 'tooltips.darkMode')}
      openDelay={200}
    >
      <ActionIcon onClick={() => toggleColorScheme()} className={classes.button}>
        {colorScheme === 'dark' ? (
          <IconSun size={20} stroke={2} />
        ) : (
          <IconMoonStars size={20} stroke={2} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default ColorSchemeToggle;
