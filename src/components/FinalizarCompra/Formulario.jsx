
import { getFirestore,doc ,getDoc,collection,getDocs,query,where,addDoc,updateDoc,writeBatch} from 'firebase/firestore';
import './Formulario.css';
import { useState,useEffect } from 'react';
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react';
import FinalizarCompraExito from "./FinalizarCompraExito"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {NavLink} from 'react-router-dom'
function Formulario() {
 //carrito 
  const { cart } = useContext(CartContext)      ;
  const { getTotal } = useContext(CartContext)      ;
  const total = getTotal()
 // console.log ("CARRITO:= ", cart)
  // cart.map( (emp,index)=>
  //   (
  
  //          console.log(emp.item)  ,         
  //          console.log(emp.nombre),
  //          console.log(emp.price * emp.quantiy)
  //   )
  // )
//carrito  

  const [name, setName] = useState("");
  const [tel, settel] = useState("");
  const [mail, setmail] = useState("");  
  let orden =""
  
  const lvItems =   
  cart.map( (emp,index)=>
  (
    {
      id : emp.item,
      title : emp.nombre,
      price : emp.price * emp.quantiy
    } 
  )  
  )                  


  const handleSubmit  = (event) => {
    event.preventDefault()
    console.log(name);
    
    const venta = {
          date : new Date().toLocaleString() + "",
          total: total,
          buyer : {
              name: name,
              phone: tel,
              email: mail,              
            },
          items: 
            lvItems                            

    // {buyer :{name,phone,email}, items[{id,title,price}],date,total}

    }

    console.log("LA VNA S", venta)
    
    const db = getFirestore()
    const lvCollection = collection(db,"Orders")
    // addDoc(lvCollection,venta).then(({ id }) => console.log("LV_ORDEN_CORRECTA=>",id))
    try{

//      const post = async (doc) => {
        const docSnapshot  =   addDoc(lvCollection,venta)           
                .then(
                    ({ id }) => {
                    //  console.log("LV_ORDEN_CORRECTA2=>",id)
                      console.log(".-(")
                     orden = id
                    //console.log("ya se agarro?:" , orden)
                    console.log ("orden:",orden)         
                    

                    
                  
                    ReactDOM.render(<p>{name} <br/>Gracias por su compra <br/>Su orden Es : <b>{orden}</b></p> , document.getElementById('sandy'))
                    // <NavLink activeClassName = 'active' to = '/'> </NavLink>


                    }
                    )                          
    }
    catch(e){
      console.log("Error adding document",e);
    }

   

    let lvactualiza = 0
    let lv_existenciaACtual =0
    cart.map( (emp,index)=>
    (
    lvactualiza = query(collection(db,"Articulos"),where("item","==",emp.item)),
    getDocs(lvactualiza).then((snapshot) => {
      let lv_documento = snapshot.docs[0].id
      //let lv_existenciaACtual = snapshot.docs.data[0].existencia AQUI!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      snapshot.forEach((doc) => {
        lv_existenciaACtual =   doc.data(0).existencia
      })

      console.log("Articulo es:", lv_documento)
      console.log("Existencia actual es:", lv_existenciaACtual)
      console.log("la cantidad vendida es", emp.quantiy)
      //aqui hacemos el update XD
         let nuevoStock = doc(db,"Articulos",lv_documento)
         let lv_nuevostock = lv_existenciaACtual - emp.quantiy
         updateDoc(nuevoStock,{ existencia: lv_nuevostock})

         console.log("Existencia despues de la venta es:", lv_nuevostock)
         
     
    })

    )  
    ) 

  }
  
    return (
      <>
      <div className="actualizate" id = "sandy">
        <form onSubmit={handleSubmit}>
          <div >
            <input
              name='Nombre'
              placeholder='Nombre'
              value ={name}
              onChange={(event) => setName(event.target.value)}
            /><br/>
            <input
              name='Telefono'
              placeholder='Telefono'
              value = {tel}
              onChange={(event) => settel(event.target.value)}
            /><br/>
            <input
              name='Correo'
              placeholder='Correo'
              value= {mail}
              onChange={(event) => setmail(event.target.value)}
            /><br/>
          </div>
          <button  type = "submit" >Finalizar Compra</button>
        </form>

      </div>



      </>
    );
  }
  
  export default Formulario;