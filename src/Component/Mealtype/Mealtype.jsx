import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import style from "./Mealtype.module.scss";
import axios from "axios";

export default function Mealtype() {
  const params = useParams();
  const category = params.category;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [type, setType] = useState([]);
  const navigate = useNavigate();

  async function getType() {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
      );
      setType(res.data.meals || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  }

  useEffect(() => {
    getType();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {}, [category]);

  return (
    <>
      <h1 className={style.title}>Learn, Cook, Eat Your Food</h1>
      <div className={style.typesContainer}>
        {isMobile ? (
          <select
            onChange={(e) => {
              if (e.target.value) navigate(`/category/${e.target.value}`);
            }}
            className={style.select}
            value={category || ""}
          >
            {type.map((typePart) =>
              typePart.strCategory ? (
                <option key={typePart.strCategory} value={typePart.strCategory}>
                  {typePart.strCategory}
                </option>
              ) : null
            )}
          </select>
        ) : (
          <>
            <NavLink to="/" className={style.typeSection}>
              All
            </NavLink>
            {type.map((typePart) =>
              typePart.strCategory ? (
                <div className={style.types} key={typePart.strCategory}>
                  <NavLink
                    to={`/category/${typePart.strCategory}`}
                    className={style.type}
                  >
                    {typePart.strCategory}
                  </NavLink>
                </div>
              ) : null
            )}
          </>
        )}
      </div>
    </>
  );
}
