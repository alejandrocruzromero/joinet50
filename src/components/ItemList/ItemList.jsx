import './ItemList.css' 
import Item from '../Item/Item'
function ItemList(props){
    
    
    
      console.log ("ITEMLIST::::",props)
        

    return(
        <div className ='itemlist'>        
        
        {props.Items.map((i)=>(                  

            <Item 
                name ={i.nombre}
                id={i.item}
                key={i.item}
                price={i.precio}
                stock={i.existencia}
                imagen={i.imagen}
                // imagen={i.images[0].src}
                />

        ))}
        </div>
    )
}

export default ItemList;
