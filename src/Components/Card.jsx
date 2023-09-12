import React from "react";
import { Link } from "react-router-dom";
import { useOdontoStates } from '../Context/Context'



const Card = ({ odontologo }) => {

  const {favs, setFavs} = useOdontoStates()

  // const addFav = ()=>{
    
  // }



  return (
    <div className="card">
        <Link to={'/detail/' + odontologo.id}>  
            <h3>Name: {odontologo.name}</h3>
            <img src="/images/doctor.jpg" alt="" />
            <h4>Username: {odontologo.username}</h4>
        </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => setFavs((prevFavs) => [...prevFavs, odontologo])} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
