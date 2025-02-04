import React, { useEffect, useState } from "react";
import style from "./Meals.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Mealtype from "../Mealtype/Mealtype";

export default function Meals() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getFood() {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      if (res.data.meals) {
        setFoods(res.data.meals);
      } else {
        setFoods([]);
      }
    } catch (err) {
      console.error("Error fetching meals:", err);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div>
      <Mealtype />
      <div className={style.foodBox}>
        {loading ? (
          <div className="load">
            <span className="loader"></span>
          </div>
        ) : foods.length > 0 ? (
          foods.map((food) => (
            <div key={food.idMeal} className={style.foodItem}>
              <div className={style.image}>
                <img src={food.strMealThumb} alt={food.strMeal} />
              </div>
              <h3 className={style.space}>{food.strMeal}</h3>
              <h3 className={style.TextMeal}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                </svg>
                {food.strArea}
              </h3>
              <Link to={`foodDetails/${food.idMeal}`}>
                <button>View Recipe</button>
              </Link>
            </div>
          ))
        ) : (
          <div>No meals found!</div>
        )}
      </div>
    </div>
  );
}

