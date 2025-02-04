import React from 'react'
import style from"../Footer/Footer.module.scss"
import image from "../../assets/logo-BfNap0Pe.png"
export default function Footer() {
  return (
    <footer className={`${style.footer}`}>
    <div className={`${style.partOne}`}>
      <div className={`${style.partTwo}`}>
        <div>
          <img src={image} alt="image" />
        </div>
        <h2>Recipe</h2>
      </div>
      <div>
        <h2>FrontEnd</h2>
      </div>
    </div>
    <h2>© 2025. All Rights Reserved.</h2>
  </footer>
  )
}
