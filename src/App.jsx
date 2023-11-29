import { React, useRef } from "react";
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AnimatedSwitch from "./components/AnimatedSwitch";
import Layout from "./components/Layout";



function App() {
	const darkTheme = useSelector((state) => state.theme.darkTheme);


	return (
		<div className={`App ${darkTheme ? 'dark-theme' : ''}`}>
			<BrowserRouter>
				<Layout>
					<AnimatedSwitch />
				</Layout>
			</BrowserRouter>
		</div >
	);
}
export default App;