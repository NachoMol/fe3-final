import React from 'react'
import { Link } from "react-router-dom";
import './styles/Navbar.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='nav'>
      <ul className="navbar-list">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
      <li><Link to="/favs">Favs</Link></li>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
      </ul>

    </nav>
  )
}

export default Navbar