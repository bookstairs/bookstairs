import { Group } from '@mantine/core';

import ColorSchemeToggle from '@/components/Layout/Header/ColorSchemeToggle';
import LanguageSwitch from '@/components/Layout/Header/LanguageSwitch';

export default function HomePage() {
  return (
    <>
      <Group position="center" mt="xl">
        <ColorSchemeToggle />
      </Group>
      <Group position="center" mt="xl">
        <LanguageSwitch />
      </Group>
    </>
  );
}
