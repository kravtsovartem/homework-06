import AuthProvider from '@/contexts/AuthProvider'
import ViewRouter from '@/router'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

const theme = createTheme({})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications />
        <AuthProvider>
          <ViewRouter />
        </AuthProvider>
      </ModalsProvider>
    </MantineProvider>
  )
}
