import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import useTranslation from 'next-translate/useTranslation';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation('common');

  // TODO Unified styles for dark and night by the vercel design.
  return (
    <Tooltip label={t(colorScheme === 'dark' ? 'tooltips.lightMode' : 'tooltips.darkMode')}>
      <ActionIcon onClick={() => toggleColorScheme()} size="xl">
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
