import './CartWidget.css';
//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';
const element = <FontAwesomeIcon icon={faShoppingCart} />
//const element = <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />

//ReactDOM.render(element, document.body)

function CartWidget() {
  const { getTotalPiezas } = useContext(CartContext)      ;
  // console.log("CARRITO ICONO : - el carro tiene: ", getTotal())   
  
    const totalCarrito= getTotalPiezas();
    console.log("Total Piezas: ", totalCarrito) 
  return (
    <section className="CartWidget">
    
    
    <li><NavLink activeClassName = 'active' to = '/Cart'>{element} {totalCarrito}</NavLink></li>
    </section>
  );
}

export default CartWidget;