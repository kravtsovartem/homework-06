import SearchSelect from '@/components/SearchSelect'
import Sidebar from '@/components/Sidebar'
import ErrorBoundary from '@/hoc/ErrorBoundary'
import useNotes from '@/hooks/useNotes'
import {
  ActionIcon,
  AppShell,
  Burger,
  Flex,
  Grid,
  Group,
  ScrollArea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure()

  const params = useParams()
  const navigate = useNavigate()

  const id = Number(params?.id)
	
  const { createNote, removeNote } = useNotes(id)

  const openModal = () =>
    modals.openConfirmModal({
      title: 'Удалить заметку?',
      labels: { confirm: 'Удалить', cancel: 'Отменить' },
      confirmProps: { color: 'red' },
      onCancel: () => {},
      onConfirm: () => {
        notifications.show({
          message: 'Заметка удалена',
        })
        navigate('/')
        removeNote(id)
      },
    })

	const handleNewNote = async () => {
		const newNote = await createNote()
		navigate(`/note/${newNote?.id}`)
	}

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Grid align="center" w="100%">
            <Grid.Col span="auto">
              <Flex justify="start" align="center" gap="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <ActionIcon size={42} variant="transparent" title="Создать заметку" onClick={handleNewNote}>
                  <IconEdit size={24} />
                </ActionIcon>
              </Flex>
            </Grid.Col>
            <Grid.Col span="auto"></Grid.Col>
						<Grid.Col span={6}>
              <SearchSelect />
            </Grid.Col>
          </Grid>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Grid align="center" m={8.5}>
          <Grid.Col span="auto">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Grid.Col>
          <Grid.Col span={6}></Grid.Col>
          <Grid.Col span="auto">
            <ActionIcon size={42} variant="transparent" onClick={openModal} title='Удалить заметку'>
              <IconTrash size={24} />
            </ActionIcon>
          </Grid.Col>
        </Grid>
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
