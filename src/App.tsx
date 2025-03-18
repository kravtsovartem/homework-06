import AuthProvider from '@/contexts/AuthProvider'
import ViewRouter from '@/router'
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Your theme override here */
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <ViewRouter />
      </AuthProvider>
    </MantineProvider>
  )
}
