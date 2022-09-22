import React from "react";
import "./style.css";

export function Modal({ setModal, hero }) {

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="modalgroup">
      <div className="modal">
        <div className="modalinfo">
          <div className="imagehero"><img src={hero.images.sm} alt={hero.name} /></div>
          <div className="heroinfo">
            <h2>{hero.name}</h2>
            <div className="containerhero">
              <div className="infowidth">
                <ul>
                <li>Name: {hero.biography.fullName}</li>

                  <li>Intelligence: {hero.powerstats.intelligence}</li>
                  <li>Strength: {hero.powerstats.strength}</li> 
                 
                  <li>Power: {hero.powerstats.power}</li>
                  <li>Strength: {hero.powerstats.strength}</li>
                 
                </ul>
                <div className="closemodal">
                  <button onClick={handleCloseModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
