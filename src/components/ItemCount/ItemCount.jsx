import './ItemCount.css'
import  {Link} from 'react-router-dom'
import { useState,useContext } from "react";
import { CartContext } from '../Context/CartContext'


function Contador(props){
    const { addToCart } = useContext(CartContext)      ;
    const [purchaseCompleted,setPurchaseCompleted] = useState (false)
    const onAdd =(count) =>{
        //Recibe la cantidad que esta en itemcount y se la pasa a la funcion addtocart
        setPurchaseCompleted(true);
        addToCart(props.id,num,props.price,props.nombre);
        console.log("IDARTICULO=", props.id)
        console.log("cantidaARTICULO=", num)
        console.log("PRECIOARTICULO=", props.price)
        console.log("NOMBRE=", props.nombre)
    }

    let disabled = ""
    if (props.cantidad === 0) { 
        disabled = ""
    }else{
        disabled = "disabled"
    }    
    const[num,setNum] = useState(1);
    const sumar =() =>{
        if (num < props.cantidad){
            setNum(num + 1)
        }
    }

    const restar =() =>{
        if (num> 1){
            setNum(num - 1)
        }else{
        }
    }

    const reset =() =>{    
        setNum(1)    
    }

    // const onadd = () =>{
    //     console.log(props.id)
    //     console.log(num)

        // const newCarrito= {
        //     id: props.id,
        //     cantidad: num
        // }
        //para pasar al papa
        // console.log ("ItemCount:")
        // props.onSaveData(newCarrito)
        //para pasar al papa

    //}

    return(
        <>
        <p className="verDetalle">
            <button className="btnBTNdte" onClick = {restar}>-</button>
            &nbsp;&nbsp;{num}&nbsp;&nbsp;
            <button className="btnBTNdte" onClick = {sumar}>+</button>
            <button className="btnBTNdte" onClick = {reset}>limpiar</button>        
        </p>
        <p p className="verDetalle">
            
            {
                    purchaseCompleted ? (
                        
                        <Link to = '/cart' > 
                            <div className="btnContainer"> 
                                <p className="verDetalle btn">Ir a Carrito
                                </p>
                            </div>
                        </Link> 
                    ) : (
                        <button  className="btnBTN" onClick = {onAdd} disabled={!disabled} >Agregar al Carrito</button> 
                    )
                }
            {/* <button   onClick = {onAdd}  disabled={!disabled}>Agregar al Carrito</button>  */}
        </p>
        <p className="stock">Stock : {props.cantidad}</p>
        
        
        </>
    )
}

export default Contador;