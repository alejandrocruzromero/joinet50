import { faProcedures } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getFirestore,doc ,getDoc,collection,getDocs,query,where} from 'firebase/firestore';


function ItemListContainer(props){
    const params = useParams()
    const [ItemFetch,setItemsFetch] = useState([])
    const resultx = []
    // const FetchItems = () =>{

    //     console.log("ItemListContainer.params.id", parseInt(params.id))
    //     let lv_url = ""                
    //         if (!isNaN(params.id)) {
    //              lv_url = `https://joinet.com/wp-json/wc/v3/products/?category=${params.id}&consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455&per_page=25`;
    //         }else{
    //              lv_url = `https://joinet.com/wp-json/wc/v3/products/?consumer_key=ck_1b97c8e55de58296d792f150cbeb987f0097fa34&consumer_secret=cs_159bb5346697bd2acce4641021b86f78eace4455&per_page=25`;
    //         }
    //         fetch(lv_url)   
    //         .then((response)=> response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setItemsFetch(data)    
    //     })


    //     const resultx = Object.values(ItemFetch);
    //     console.log(resultx);
    //     //console.log('ILC.resultx[0].name:', resultx[0].name);
    //   //  const resulty = Object.values(resultx[0].meta_data);
    //     //console.log('ILC.resultx[0].images:',resulty);
    // }

    useEffect( () => {
        //TRAER DATOS DE FIREBASE      
        //Instalar firebase
        //Revisa index.js
        //COLOCAR HASTA ARRIBA : import { getFirestore,doc ,getDoc} from 'firebase/firestore';
        console.log ("USEEFFECT = "+params.id)
                //const db = getFirestore()
                //const moviesRef = collection(db,"Articulos")
      
                const db = getFirestore()
                const q = query(collection(db,"Articulos"),where("categoria","==",parseInt(params.id)))
                getDocs(q).then((snapshot) => {                                                    
                  setItemsFetch(snapshot.docs.map((doc)=>doc.data()))           
                })
        //TRAER DATOS DE FIREBASE        
            },[])

    return(
        <div>            
            
     <div> <h1>Tienda en Linea </h1></div>
            <ItemList Items = {ItemFetch} />
        </div>


    )

}

export default ItemListContainer;