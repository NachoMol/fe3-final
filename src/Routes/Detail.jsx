import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useOdontoStates } from '../Context/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {state, dispatch} = useOdontoStates()
  const params = useParams()
  const {name,email,phone,website} = state.odontologo

  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
      axios(url)
      .then(res => dispatch({type: 'GET_ODONTOLOGO', payload: res.data}))
  }, [])


  return (
    <>
    <table className='table'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{website}</td>
        </tr>
      </tbody>
    </table>
  </>
  )
}

export default Detail