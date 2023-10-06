import React, { useEffect, useState } from 'react';
import { FetchMealById } from '../services/mealtService'; // Asegúrate de que la ruta sea la correcta

const MealDetails = ({ mealId }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const data = await FetchMealById(mealId);
        setMealDetails(data);
      } catch (error) {
        console.error('Error al obtener detalles de la comida:', error);
      }
    }

    fetchMeal();
  }, [mealId]);

  if (!mealDetails) {
    return <div>Cargando detalles de la comida...</div>;
  }

  return (
    <div>
      <h2>{mealDetails.strMeal}</h2>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
      <p>{mealDetails.strInstructions}</p>
    </div>
  );
};

export default MealDetails;
