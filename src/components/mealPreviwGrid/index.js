
import './index.css';
import MealPreviw from '../mealPreview';

const MealPreviwGrid = ({meals}) => {


  
  return (
    <div className='meal-grid'>
      {meals.map((meal) => (
        <MealPreviw key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default MealPreviwGrid;

