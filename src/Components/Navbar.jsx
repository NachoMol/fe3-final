import React from 'react'
import { Link } from "react-router-dom";
import './styles/Navbar.css';
import { useOdontoStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useOdontoStates(); 

  // Función para cambiar el tema
  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' }); // Activa la acción SWITCH_THEME del contexto
};
  return (
    
      <nav className='nav'>
        <img src="/images/logoPersonalizado.jpg" alt="DH" className='logoPersonalizado' />
      <ul className="navbar-list">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
      <li><Link to="/favs">Favs</Link></li>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>{state.theme ? <img className="icon" src="/images/sun.png" alt="fav"/> : <img className="icon" src="/images/moon.png" alt="fav"/>}</button>
      </ul>
      </nav>
    
  )
}

export default Navbar