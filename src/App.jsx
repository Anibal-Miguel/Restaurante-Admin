import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
//import Login from './components/Login';
//import Registrar from './components/Registrar'
//import Modal from './components/Modal'


function App() {
  // Recuperamos la variable global loading, para mostrar o no el spinner
 // const loading = globalState((state) => state.loading)
  return (
    <Router>
      {/*{loading && <Spinner className="loading-box" animation="grow" variant="warning" />}*/}
      <Navbar/>
      <Home/>

    {/*
      Nuestro paquete de rutas solo contiene un Home, un Login y el listado de Giftcars.
      Por supuesto podemos agregar otras según sea necesario. El route de 404 siempre queda
      al final para capturar cualquier ruta incorrecta que se introduzca manualmente en la URL.
  */}
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/Registrar" element={<Registrar />} />*/}
          {/*<Route path="/login" element={<Login />} />
          <Route path="/giftcards" element={<GiftCards />} />
        
<Route path="*" element={<Error404 />} />*/}
        </Routes>
    </Router>
  );  
}

export default App


