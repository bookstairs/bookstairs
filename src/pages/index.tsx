import { Group } from '@mantine/core';

import ColorSchemeToggle from '@/components/Layout/Header/ColorSchemeToggle';
import HeaderLogo from '@/components/Layout/Header/HeaderLogo';
import LanguageSwitch from '@/components/Layout/Header/LanguageSwitch';

export default function HomePage() {
  return (
    <>
      <Group position="center" mt="xl">
        <HeaderLogo />
        <ColorSchemeToggle />
        <LanguageSwitch />
      </Group>
    </>
  );
}
