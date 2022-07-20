import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getFirestore,doc ,getDoc,collection,getDocs,query,where} from 'firebase/firestore';


 function ItemDetailContainer(props){
     const params = useParams()
     const [ItemFetch,setItemsFetch] = useState([])    
//     const FetchItems = () =>{
        
//             // fetch('https://www.breakingbadapi.com/api/characters')
//             fetch(`https://joinet.com/wp-json/wc/v3/products/${params.id}/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455`)
//             .then((response)=> response.json())
//             .then((data) => {
//                 console.log(data)
//                 setItemsFetch(data)    
//         })
//         const resultx = Object.values(ItemFetch);
//         console.log(resultx);
//         //console.log('ILC.resultx[0].name:', resultx[0].name);
//       //  const resulty = Object.values(resultx[0].meta_data);
//         //console.log('ILC.resultx[0].images:',resulty);
//     }


//     useEffect(()=>{
//         FetchItems()
//     },[])    


useEffect( () => {
    //TRAER DATOS DE FIREBASE      
    //Instalar firebase
    //Revisa index.js
    //COLOCAR HASTA ARRIBA : import { getFirestore,doc ,getDoc} from 'firebase/firestore';
    console.log ("USEEFFECT = "+params.id)
            //const db = getFirestore()
            //const moviesRef = collection(db,"Articulos")
  
            const db = getFirestore()
            const q = query(collection(db,"Articulos"),where("item","==",parseInt(params.id)))
            getDocs(q).then((snapshot) => {                 
                console.log("hola");
                                   
              setItemsFetch(snapshot.docs.map((doc)=>doc.data()))           
            })
    //TRAER DATOS DE FIREBASE        
        },[])

    return(
        <div>            
            {ItemFetch.map((i)=>(                  

            <ItemDetail 
                nombre ={i.nombre}
                item={i.item}
                key={i.item}
                precio={i.precio}
                existencia={i.existencia}
                imagen={i.imagen}
                // imagen={i.images[0].src}
                />

            ))}

           
        </div>


    )

}

export default ItemDetailContainer;