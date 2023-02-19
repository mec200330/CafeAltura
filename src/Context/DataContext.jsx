import {  createContext, useState, useEffect  } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
export const DataContext = createContext()

const DataProvider =({children})=>{
    const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'
    const [coffe, setCoffe] = useState([])
    const [fetching, setFeching] = useState(true)
    const [cart, setCart] = useState([]) //mi carrito
    const [productsLength, setProductsLength] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [total, setTotal] = useState(0)
    const [freeSend, setFreeSend] = useState(0)
useEffect(()=>{
    axios
    .get(apiURL)
    .then((response)=>{
        setCoffe(response.data.products)
        setFeching(false)
    })
    .catch(err=> console.error(err))
}, [])

useEffect(() => {
    setProductsLength(cart.reduce((acc, el) => acc + el.quantity, 0))
    setTotal((cart.reduce((previous, current) => previous + current.quantity * current.price, 0)))
}, [cart])


    return(

        <DataContext.Provider value = {{coffe, fetching, setCart, cart, productsLength, setShowCart, showCart, total, setTotal, freeSend, setFreeSend}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider