import './CartItem.css';
// import  {Link} from 'react-router-dom'

function CartItem(props){

    console.log ("Rntro?" + props.item)
    return(
    <section   className="Item">                    
         
        <h5 className = "ItemTitulo">{props.item}</h5>
        <p className = "ItemP">${props.price}</p>
        <p className = "ItemS">Stock: {props.quantiy}</p>
        
    </section>

    );

}

export default CartItem;