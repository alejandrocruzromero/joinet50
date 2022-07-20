import './ItemDetail.css';
 import  {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';
import { useState } from 'react';
function ItemDetail(props){
        //const {name,id,description,talle,price,img} = props.item
        //   console.log("imagen:",props.imagen)
    const { addToCart } = useContext(CartContext)      ;
    const [purchaseCompleted,setPurchaseCompleted] = useState (false)
    const onAdd =(count) =>{
        //Recibe la cantidad que esta en itemcount y se la pasa a la funcion addtocart
        setPurchaseCompleted(true);
        alert (props.price);
        addToCart(props.id,count,props.price);
    }
    return(
    <section   className="ItemDetail">                    
    {/* {props.description.length !== 0 && <h1>Nombre: {props.description}</h1>} */}
    
        <div className = "contenedorItem">
            <div className = "contenedorImagen">        
                <img src={props.imagen}  className = "ItemContenidoImagen" alt ="contenido"/>
            </div>
            <div className = "contendedorTexto">
                <h1 className = "ItemTituloDetalle">{props.nombre}</h1>
                <h2 className = "ItemPrecio">${props.precio}</h2>
                <p className = "ItemSku">SKU: {props.item}</p>
                {/* <p className = "ItemPCategoria">categoria: {props.category}</p> */}
                <hr/>                
                <ItemCount cantidad = {props.existencia} id = {props.item} price ={props.precio} nombre = {props.nombre}/>                
                {/* <p>{props.id}</p>    */}
                {/* <Link to = {`/productos/${props.id}`} > <h4>Ver Detalles del producto</h4></Link>  */}
                {/* <Link to = {`/productos/${props.id}`} > <p className="verDetalle">ver detalle</p></Link> */}
                {/* {
                    purchaseCompleted ? (
                        <Link to = '/cart' > <p className="verDetalle">Ir a Carrito</p></Link> 
                    ) : (
                        <button   onClick = {onAdd} >Agregar al Carrito</button> 
                    )
                } */}
            </div>
        </div>
        <hr/>
        <div >
        <p className = "ItemP">{props.description}</p>
        </div>
    </section>

    );

}

export default ItemDetail;