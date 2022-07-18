import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


function ItemDetailContainer(props){
    const params = useParams()
    const [ItemFetch,setItemsFetch] = useState([])    
    const FetchItems = () =>{
        
            // fetch('https://www.breakingbadapi.com/api/characters')
            fetch(`https://joinet.com/wp-json/wc/v3/products/${params.id}/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455`)
            .then((response)=> response.json())
            .then((data) => {
                console.log(data)
                setItemsFetch(data)    
        })
        const resultx = Object.values(ItemFetch);
        console.log(resultx);
        //console.log('ILC.resultx[0].name:', resultx[0].name);
      //  const resulty = Object.values(resultx[0].meta_data);
        //console.log('ILC.resultx[0].images:',resulty);
    }


    useEffect(()=>{
        FetchItems()
    },[])    

    return(
        <div>            
            <ItemDetail 
             nombre = {ItemFetch.name} 
             id = {ItemFetch.id} 
             price = {ItemFetch.price} 
             stock = {ItemFetch.stock_quantity} 
            //  {ItemFetch.length !== 0 && <h1>Nombre: {cardFetch.name}</h1>}
            
            //  category = {ItemFetch.categories[0].name}
            //  imagen = {ItemFetch.images[0].src} 
              
             sku = {ItemFetch.sku} 
             description = {ItemFetch.description} 
             />
        </div>


    )

}

export default ItemDetailContainer;