import './Item.css';
import  {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
function Item(props){
       
        //    console.log("imagen:",props.imagen)
     
        // const saveCarritoHandler = (newCarrito) =>{
        //     const CarritoData = {
        //         ...newCarrito                                
        //     }
        //     //para pasar al papa
        //     console.log("papa:",CarritoData)
        //     props.onAddCarrito(CarritoData)
        //     //para pasar al papa
        // }

    return(
    <section   className="Item">                    
    {/* {props.description.length !== 0 && <h1>Nombre: {props.description}</h1>} */}
    

        <img src={props.imagen}  className = "ItemContenido" alt ="contenido"/>
        <h5 className = "ItemTitulo">{props.name}</h5>
        <p className = "ItemP">${props.price}</p>
        <p className = "ItemS">Stock: {props.stock}</p>
        {/* <ItemCount onSaveData={saveCarritoHandler}  cantidad = {props.stock} id = {props.id}/> */}
        {/* <ItemCount   cantidad = {props.stock} id = {props.id}/> */}
        {/* <p className = "ItemP">Existencia {props.stock}</p> */}
        {/* <p>{props.id}</p>    */}
        {/* <Link to = {`/productos/${props.id}`} > <h4>Ver Detalles del producto</h4></Link>  */}
        <Link to = {`/productos/${props.id}`} > <p className="verDetalle">ver detalle</p></Link>
    </section>

    );

}

export default Item;