import AuthProvider from '@/contexts/AuthProvider'
import ViewRouter from '@/router'
import '@mantine/core/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'
import StoreContextProvider from '@/contexts/StoreContextProvider'

const theme = createTheme({})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <StoreContextProvider>
          <ViewRouter />
        </StoreContextProvider>
      </AuthProvider>
    </MantineProvider>
  )
}
