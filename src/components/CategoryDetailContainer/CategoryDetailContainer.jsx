import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import './CategoryDetailContainer.css'

function CategoryDetailContainer(){
    console.log("InicioBien")
    const [ItemFetch,setItemsFetch] = useState([])    
    const FetchItems = () =>{
            console.log("vamosBien1")
            fetch(`https://joinet.com/wp-json/wc/v3/products/categories/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455&per_page=25`)            
            .then((response)=> response.json())            
            .then((data) => {
                console.log("vamosBien4")
                console.log(data)
                setItemsFetch(data)    
        })
        const resultx = Object.values(ItemFetch);
        console.log(resultx);        
    }
    useEffect(()=>{
        console.log("useEffect Bien")
        FetchItems()
    },[])    
    return(
        <div>            
            <CategoryDetail  Items = {ItemFetch}                           
            />
        </div>
    )
}

export default CategoryDetailContainer;