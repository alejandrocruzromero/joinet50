import './CartItem.css';
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';

// import  {Link} from 'react-router-dom'


function CartItem(props){


    const { removeFromCart } = useContext(CartContext)      ;
    const onDel =(item) =>{
    //Recibe la cantidad que esta en itemcount y se la pasa a la funcion addtocart
   
    removeFromCart(props.item);
    console.log("BORRO=", item )       
    }


    console.log ("Rntro?" + props.item)
    return(
    <section   className="Item">                    
         
        <h5 className = "ItemTitulo">{props.item}</h5>
        <p className = "ItemP">${props.price}</p>
        <p className = "ItemP">cantidad: {props.quantiy}</p>
        <p className = "ItemP">Total: ${props.price * props.quantiy}</p>
        <button   onClick = {onDel}  >Borrar</button> 
    </section>

    );

}

export default CartItem;