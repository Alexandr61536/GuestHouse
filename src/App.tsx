import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import { Hat } from './components/Hat';

function App() {

	const theme = createTheme({
		fontSizes: {
			"md": "clamp(1rem, 7vw, 3rem)",
			"lg": "clamp(1.5rem, 15vw, 5rem)",
		},
		fontFamily: "Montserrat",
	});

	return (
		<MantineProvider theme={theme}>
				
		<Hat
			description='Гостиный дом'
			title='Вишня'
		/>
		</MantineProvider>
	)
}

export default App
