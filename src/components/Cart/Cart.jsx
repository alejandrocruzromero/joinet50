// import { useState } from 'react';
// import { useEffect } from 'react'
// import ItemList from '../ItemList/ItemList'
import CartItem from './CartItem'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';
import './Cart.css'
import { useState,useEffect } from 'react';
import {NavLink} from 'react-router-dom'
function Cart({props}){
    // const { carritoActual } = useContext(CartContext)      ;
     const { cart } = useContext(CartContext)      ;
    const { MuestraItems } = useContext(CartContext)      ;    
    const { getTotal } = useContext(CartContext)      ;
    
    const { clearCart } = useContext(CartContext)      ;
    

    const [emp,setcart]=useState(cart)

    const arregloCarrito = MuestraItems();

    const total = getTotal()

const onDelAll=(count) =>{
    //Recibe la cantidad que esta en itemcount y se la pasa a la funcion addtocart
   
    clearCart();
    console.log("BORRO= TOTO")        
}

   
    // const noFunciona = carritoActual()
    //NO FUNCIONA
    // console.log("NO FUNCIONA:"+carritoActual())
    // const [ItemFetch,setItemsFetch] = useState([])    
    // const FetchItems = () =>{
    //         // fetch(MuestraItems())
    //         fetch(noFunciona)
    //         .then((response)=> response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setItemsFetch(data)    
    //     })
    //     const resultx = Object.values(ItemFetch);
    //     console.log("resultx:"+ resultx);
    // }


    // useEffect(()=>{
    //     FetchItems()
    // },[])    


    //NO FUNCIONA



    return(
        <>
        
            <h2>Carrito de compra</h2>            
            <div className = "carrito" >                
               
    {/* funciona ok        
       {cart.map( (emp,index)=>
       (
          <div key={index}>
              <h3>{emp.item}</h3>
              <p>{emp.price} x {emp.quantiy} = {emp.price * emp.quantiy} </p>
              <button   onClick = {onDel}  >Borrar</button> 
          </div>
       )
       )}


            <p>{arregloCarrito}</p>
            <p>Importe Total: $ 
            {getTotal()}

            </p>
             <button   onClick = {onDelAll}  >Limpiar Carrito</button> 
             funciona ok    */}

      {cart.map( (emp,index)=>
       (
        <CartItem           
              item = {emp.item}
              nombre = {emp.nombre}
              price = {emp.price}
              quantiy =  {emp.quantiy}                        
          />
       )
       )}
 </div>
 <div>
        <p>Importe Total: $ 
            {getTotal()}
        </p>
        
        <p>
             <button   onClick = {onDelAll}  >Limpiar Carrito</button>
             </p>
            <p>
            { total == 0   ? ( 
                <p></p>
            ) : (
                <NavLink activeClassName = 'active' to = '/finalizar'>Finalizar Compra!</NavLink>  
            )
             }
             </p>

        </div>
     
        </>
    )
}
export default Cart;
