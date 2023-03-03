import React from 'react'

const TopBar = () => {
  return (
    <div className="top-bar">
        <p><span className="top-bar__new">Nouveau !</span> Offres désormais disponibles à partir de <span className="top-bar__price">5,99€</span>./mois</p>
        <button className="top-bar__btn">
            En savoir plus 
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    </div>
  )
}

export default TopBar;