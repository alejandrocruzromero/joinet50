import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import AudioItemListContainer from './components/AudioItemListContainer/AudioItemListContainer'
// import HogarItemListContainer from './components/HogarItemListContainer/HogarItemListContainer'
import ComputoItemListContainer from './components/ComputoItemListContainer/ComputoItemListContainer'
import ElectronicaItemListContainer from './components/ElectronicaItemListContainer/ElectronicaItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CategoryDetailContainer from './components/CategoryDetailContainer/CategoryDetailContainer'
import Cart from './components/Cart/Cart'



function App() {

  const Carrito =[
    {
      id: '',
      cantidad:'',
    },      
  ];

  //para pasar al papa
  const addCarritoHandler = (newCarrito) =>{
    //para pasar al papa
    Carrito.push(newCarrito)
    console.log("carrote:" + Carrito)
  }

  return (
    
    <div className="App">
      <NavBar />
      {/* <section className="cuerpo">
        <ItemListContainer />
      </section> */}
      <Routes>                
        <Route exact path="/"            element={<ItemListContainer />}></Route>
        <Route exact path="/Audio"       element={<AudioItemListContainer />}></Route>        
        <Route exact path="/Computo"     element={<ComputoItemListContainer />}></Route>
        <Route exact path="/Electronica" element={<ElectronicaItemListContainer />}></Route>
        <Route exact path="/Category"       element={<CategoryDetailContainer />}></Route>
        <Route exact path="/Categorias/:id" element={<ItemListContainer />}></Route>       
        {/* <Route exact path="/productos/:id" element={<ItemDetailContainer onAddCarrito={addCarritoHandler}/>}></Route>                */}
        <Route exact path="/productos/:id" element={<ItemDetailContainer onAddCarrito={addCarritoHandler}/>}></Route>
        <Route exact path="/cart"           element={<Cart />}></Route>     
        {/* <Route exact path="/cart"           element={<Cart />}></Route>      */}
      </Routes>
    </div>
  );
}

export default App;
