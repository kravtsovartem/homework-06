import Sidebar from '@/components/Sidebar'
import ErrorBoundary from '@/hoc/ErrorBoundary'
import {
  AppShell,
  Burger,
  Group,
  ScrollArea,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="xl" fw={700}>
            Заметки
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <ScrollArea>
          <Sidebar />
        </ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </AppShell.Main>
    </AppShell>
  )
}
