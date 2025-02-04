
import React, { useEffect, useState } from "react";
import style from "./FoodDetails.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function FoodDetails() {
  const [foodsDetails, setfoodsDetails] = useState([]);
  let { id } = useParams();

  function getfoodsDetails(id) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setfoodsDetails(res.data.meals);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    getfoodsDetails(id);
  }, []);

  return (
    <>
      {foodsDetails?.map((food) => (
        <React.Fragment key={food.idMeal}>
          <h1>{food.strMeal}</h1>

          <div key={food.idMeal} className={style.container}>
            <div className={style.partOne}>
              <img src={food.strMealThumb} className="w-full" alt="" />
              <div>
                <Link to={food.strYoutube} target="_blank">
                <button className={style.you}>
                 <span>Youtube</span>
                    </button>
                </Link>
                <Link to={food.strSource} target="_blank">
                  <button className={style.source} >
                    source
                  </button>
                </Link>
              </div>
            </div>

            <div className={style.partTwo}>
              <p>{food.strInstructions}</p>
            </div>

            <div className={style.partThree}>
              <h1>Ingredients</h1>
              <ul>
                {food.strIngredient1 && food.strIngredient1.trim() !== "" && (
                  <li>
                    <span>{food.strIngredient1}:</span>
                    <span>{food.strMeasure1}</span>
                  </li>
                )}
                {food.strIngredient2 && food.strIngredient2.trim() !== "" && (
                  <li>
                    <span>{food.strIngredient2}:</span>
                    <span>{food.strMeasure2}</span>
                  </li>
                )}
                {food.strIngredient3 && food.strIngredient3.trim() !== "" && (
                  <li>
                    <span>{food.strIngredient3}:</span>
                    <span>{food.strMeasure3}</span>
                  </li>
                )}
                {food.strIngredient4 && food.strIngredient4.trim() !== "" && (
                  <li>
                    <span>{food.strIngredient4}:</span>
                    <span>{food.strMeasure4}</span>
                  </li>
                )}
                {food.strIngredient5 && food.strIngredient5.trim() !== "" && (
                  <li>
                    <span>{food.strIngredient5}:</span>
                    <span>{food.strMeasure5}</span>
                  </li>
                )}
                {food.strIngredient6 && food.strIngredient6.trim() !== "" && (
                  <li>
                    <span>{food.strIngredient6}:</span>
                    <span>{food.strMeasure6}</span>
                  </li>
                )}
                {food.strIngredient7 && food.strIngredient7.trim() !== "" && (
                  <li className={style.last}>
                    <span>{food.strIngredient7}:</span>
                    <span>{food.strMeasure7}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}