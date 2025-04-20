import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';

function App() {

  const theme = createTheme({
  });

  return (
    <MantineProvider theme={theme}>
    </MantineProvider>
  )
}

export default App
