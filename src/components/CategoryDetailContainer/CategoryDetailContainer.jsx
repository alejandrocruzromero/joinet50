import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import './CategoryDetailContainer.css'
import { getFirestore,doc ,getDoc,collection,getDocs,query,where} from 'firebase/firestore';

function CategoryDetailContainer(){
    console.log("InicioBien")
    const [ItemFetch,setItemsFetch] = useState([])    
    // const FetchItems = () =>{
    //         console.log("vamosBien1")
    //         fetch(`https://joinet.com/wp-json/wc/v3/products/categories/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455&per_page=25`)            
    //         .then((response)=> response.json())            
    //         .then((data) => {
    //             console.log("vamosBien4")
    //             console.log(data)
    //             setItemsFetch(data)    
    //     })
    //     const resultx = Object.values(ItemFetch);
    //     console.log(resultx);        
    // }
    // useEffect(()=>{
    //     console.log("useEffect Bien")
    //     FetchItems()
    // },[])   
    
    useEffect( () => {
        //TRAER DATOS DE FIREBASE      
        //Instalar firebase
        //Revisa index.js
        //COLOCAR HASTA ARRIBA : import { getFirestore,doc ,getDoc} from 'firebase/firestore';
        console.log ("USEEFFECT")
                //const db = getFirestore()
                //const moviesRef = collection(db,"Articulos")
      
                const db = getFirestore()
                const q = query(collection(db,"categorias"),where("categoria","!=",0))
                getDocs(q).then((snapshot) => {                                                    
                  setItemsFetch(snapshot.docs.map((doc)=>doc.data()))           
                })
        //TRAER DATOS DE FIREBASE        
            },[])
    

    return(
        <div>            
            <CategoryDetail  Items = {ItemFetch}                           
            />
        </div>
    )
}

export default CategoryDetailContainer;