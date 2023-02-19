import {Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Pages/Shop';
import NavBar from './Components/NavBar/NavBar';
import CartContent from './Components/CartContent/CartContent';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyrigth/Copyrigth';
import DataProvider from './Context/DataContext';
import Cesta from './Pages/Cesta';
import Checkout from './Pages/Checkout';




function App() {
  return (
    
      <div>
        
        <DataProvider>
         <NavBar/>
         
         <CartContent/>
         <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/cesta' element={<Cesta/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
         </Routes>
         <Footer/>
         <Copyright/>
        </DataProvider>


      </div>
      
      
      
    
  )
}

export default App;
