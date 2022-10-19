import { Group } from '@mantine/core';

import ColorSchemeToggle from '@/components/Layout/Header/ColorSchemeToggle';
import LanguageSwitch from '@/components/Layout/Header/LanguageSwitch';
import LoadingOverlay from '@/components/LoadingOverlay';
import { Welcome } from '@/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Group position="center" mt="xl">
        <ColorSchemeToggle />
      </Group>
      <Group position="center" mt="xl">
        <LanguageSwitch />
      </Group>

      <LoadingOverlay visible width={100} />
    </>
  );
}
