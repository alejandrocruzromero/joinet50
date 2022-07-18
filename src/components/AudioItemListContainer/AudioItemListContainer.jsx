import { useState } from 'react';
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './AudioItemListContainer.css'
function ItemListContainer({props}){
    const [ItemFetch,setItemsFetch] = useState([])
    const FetchItems = () =>{
        console.log ("props:",props)
        console.log ("props:",{props})
        
             fetch(`https://joinet.com/wp-json/wc/v3/products/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455&category=97&status=publish&onsale=true&order=asc`)
            .then((response)=> response.json())
            .then((data) => {
                console.log(data)
                setItemsFetch(data)    
        })
    }
    useEffect(()=>{
        FetchItems()
    },[])    
    return(
        <div>            
            <ItemList Items = {ItemFetch} />
        </div>
    )
}
export default ItemListContainer;