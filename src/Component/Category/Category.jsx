import React, { useEffect, useState } from "react";
import style from "./Category.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Mealtype from "../Mealtype/Mealtype";

export default function Category() {
  const [foodCategory, setFoodCategory] = useState([]);
  let { category } = useParams();

  function getCategory(cate) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
      .then((res) => {
        setFoodCategory(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getCategory(category);
  }, [category]);

  return (
    <>
      <>
        <Mealtype />
        <div className={style.foodList}>
          {foodCategory.length > 0 ? (
            foodCategory.map((food) => (
              <div key={food.idMeal} className={style.foodItem}>
                <div className={style.image}>
                  <img src={food.strMealThumb} alt={food.strMeal} />
                </div>
                <h3 className={style.space}>
                  {food.strMeal.split(" ").slice(0, 2).join(" ")}
                </h3>
                <Link to={`/Mealdetails/${food.idMeal}`}>
                  <button>View Recipe</button>
                </Link>
              </div>
            ))
          ) : (
            <div className="load">
              <span className="loader"></span>
            </div>
          )}
        </div>
      </>
    </>
  );
}