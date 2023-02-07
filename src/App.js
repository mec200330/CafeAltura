import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Pages/Shop';
import NavBar from './Components/NavBar/NavBar';




function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </div>
  )
}

export default App;
