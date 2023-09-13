import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [odontologo, setOdontologo] = useState({})
  const params = useParams()
  console.log(params)

  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(() => {
      axios(url)
      .then(res => setOdontologo(res.data))
  }, [])


  return (
    <>
      <h1>Detail Dentist id </h1>
      <h1>Nombre: {odontologo.name}</h1>
      <img src="/images/doctor.jpg" alt="" className="card-image"/>
      <h3>Email: {odontologo.email}</h3>
      <h3>Telefono: {odontologo.phone}</h3>
      <h3>Website: {odontologo.website}</h3>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail