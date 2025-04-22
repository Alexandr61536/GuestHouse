import { createTheme, MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import { Hat } from './components/Hat';
import { PresentationCard } from './components/PresentationCard';
import { Parallax } from './components/Parallax/Parallax';

function App() {

	const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

	const theme = createTheme({
		fontSizes: {
			"md": "clamp(1rem, 7vw, 3rem)",
			"lg": "clamp(1.5rem, 15vw, 5rem)",
		},
		fontFamily: "Montserrat",
	});

	return (
		<MantineProvider theme={theme}>
			<Parallax strength={10}>
				<Hat
					description='Гостиный дом'
					title='Вишня'
				/>

				{testArr.map((x, index)=>
					<PresentationCard
						index={index}
						key={index}
					/>
				)}
			</Parallax>
		</MantineProvider>
	)
}

export default App
