import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOdontoStates } from '../Context/Context'



const Card = ({ odontologo }) => {
  const {state, dispatch} = useOdontoStates()
  const findOdontologo = state.favs.find(fav => fav.id == odontologo.id)

  const addFav = ()=>{
    if(findOdontologo){
      dispatch({type: 'DELETE_FAV', payload: findOdontologo})
    } else {
      dispatch({type: 'ADD_FAV', payload: odontologo})
    }
}

const buttonText = findOdontologo ? 'Quitar de favoritos' : 'Añadir a favoritos';


  return (
    <div className="card">
        <Link to={'/detail/' + odontologo.id}>  
            <h3>Name: {odontologo.name}</h3>
            <img src="/images/doctor.jpg" alt="" className="card-image"/>
            <h4>Username: {odontologo.username}</h4>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">  {findOdontologo ? <img className="icon" src="/images/fav.png" alt="fav"/> : <img className="icon" src="/images/unfav.png" alt="fav"/>} {buttonText}</button>

    </div>
  );
};

export default Card;
