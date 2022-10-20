import { Group } from '@mantine/core';

import ColorSchemeToggle from '@/components/Layout/Header/ColorSchemeToggle';
import LanguageSwitch from '@/components/Layout/Header/LanguageSwitch';
import BookStairsLogo from '@/components/Layout/Header/Logo';

export default function HomePage() {
  return (
    <>
      <Group position="center" mt="xl">
        <BookStairsLogo />
        <ColorSchemeToggle />
        <LanguageSwitch />
      </Group>
    </>
  );
}
