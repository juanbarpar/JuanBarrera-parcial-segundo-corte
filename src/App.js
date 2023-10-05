import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import { FetchMealByFirstLetter, SearchMealByName } from './services/mealtService.js';

function App() {

	const [searchValue, setSearchValue] = useState("");
	const [meals, setMeals] = useState([]);



	useEffect(() => {
		async function fetchMeals() {
			try {
				const data = await FetchMealByFirstLetter();
				setMeals(data);
			} catch (error) {
				console.error('Error al obtener comidas:', error);
			}
		}

		fetchMeals();
	}, []);

	const handleSearchChange = async (value) => {
		setSearchValue(value);

		try {
			const data = await SearchMealByName(value);
			if (data) {
				setMeals(data);
			} else {
				setMeals([]);
			}
		} catch (error) {
			console.error('Error al obtener comidas:', error);
			setMeals([]);
		}
	};

	return (
		<div className='App'>
			<Navbar>
				<SearchBox onSearchChange={handleSearchChange} />
			</Navbar>
			<Home meals={meals} />
		</div>
	);
}

export default App;
