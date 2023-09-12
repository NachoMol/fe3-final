import axios from 'axios'
import {useContext, createContext, useState, useReducer, useEffect} from 'react'

const OdontoStates = createContext()

// const reducer = (state, action) => { USERREDUCER
//     //accion para obtener todos los personajes
//     //accion para realizar la paginacion 
//     //accion para agregar favoritos
//     //accion para borrar favoritos
//     //accion para cambiar de tema
// }

// const localFavs = JSON.parse(localStorage.getItem('favs'))
// const initialFavState = localFavs ? localFavs : []

const Context = ({children}) => {
    const [odontologos, setOdontologo] = useState([])
    //const [favs, setFavs] = useState(initialFavState) --> Favs
    //const [theme, setTheme] = useState(true) --> Modo oscuro
    
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
        .then(res => setOdontologo(res.data.results))
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('favs', JSON.stringify(favs))
    // },[favs])


    // agregar favs, setFavs al value
    return (
        <OdontoStates.Provider value={{odontologos}}>
            {children}
        </OdontoStates.Provider>
    )
}

export default Context

export const useOdontoStates = () => useContext(OdontoStates)