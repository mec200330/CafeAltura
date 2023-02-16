import {  createContext, useState, useEffect  } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
export const DataContext = createContext()

const DataProvider =({children})=>{
    const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'
    const [coffe, setCoffe] = useState([])
    const [fetching, setFeching] = useState(true)
    const [cart, setCart] = useState([]) //mi carrito

useEffect(()=>{
    axios
    .get(apiURL)
    .then((response)=>{
        setCoffe(response.data.products)
        setFeching(false)
    })
    .catch(err=> console.error(err))
}, [])


    return(

        <DataContext.Provider value = {{coffe, fetching, setCart, cart}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider