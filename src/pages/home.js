import React from 'react';
import MealPreviwGrid from '../components/mealPreviwGrid';

function Home({meals}) {
	return (
		<div className='page'>
			<MealPreviwGrid meals = {meals}/>
		</div>
	);
}

export default Home;
