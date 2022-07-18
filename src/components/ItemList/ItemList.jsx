import './ItemList.css' 
import Item from '../Item/Item'
function ItemList(props){
    
    
    
      console.log ("ITEMLIST::::",props)
        

    return(
        <div className ='itemlist'>        
        
        {props.Items.map((i)=>(                  

            <Item 
                name ={i.name}
                id={i.id}
                key={i.id}
                price={i.price}
                stock={i.stock_quantity}
                // imagen={i.images[0].src}
                />

        ))}
        </div>
    )
}

export default ItemList;
