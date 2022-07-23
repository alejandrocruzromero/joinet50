import './CartItem.css';
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';

// import  {Link} from 'react-router-dom'


function CartItem(props){


    const { removeFromCart } = useContext(CartContext)      ;
    const onDel =(item) =>{
    //Recibe la cantidad que esta en itemcount y se la pasa a la funcion addtocart
   
    removeFromCart(props.item);
    console.log("BORRO=", props.item )       
    }


    console.log ("Rntro?" + props.item)
    return(


<>
       
        
    {/* <section   className="Item">                     */}
         
        <tr><td> {props.item}</td>
            <td> {props.nombre}</td>
            <td>${props.price}</td>
            <td> {props.quantiy}</td>
            <td>${props.price * props.quantiy}</td>
            <td><button  className='btn' onClick = {onDel}  >X</button> </td>
        </tr>


        
    {/* </section> */}
    </>
    );

}

export default CartItem;