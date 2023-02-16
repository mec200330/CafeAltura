import {Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Pages/Shop';
import NavBar from './Components/NavBar/NavBar';
import CartContent from './Components/CartContent/CartContent';
import DataProvider from './Components/Context/DataContext';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyrigth/Copyrigth';




function App() {
  return (
    
      <div>
        
        <DataProvider>
         <NavBar/>
         <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/cart'element={<CartContent/>}/>
         </Routes>
         <Footer/>
         <Copyright/>
        </DataProvider>


      </div>
      
      
      
    
  )
}

export default App;
