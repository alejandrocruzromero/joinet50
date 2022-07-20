import { createContext, useState } from "react";

//2) Crear el contexto con le hook createContext() previamente importado de React
export const CartContext = createContext({})

//3) Extraer el provider(componente funcional) de su contexto creadoen el paso anterior con destucturing
const {Provider} = CartContext

// const ejemploCarrito =[
//     {
//         item:{
//             nombre : 'ropa',
//             precio: '$1000'
//         },
//         quantity:5
//     },
//     {
//         item:{
//             nombre : 'ropa',
//             precio: '$1000'
//         },
//         quantity:5
//     },
//     {
//         item:{
//             nombre : 'ropa',
//             precio: '$1000'
//         },
//         quantity:5
//     }
// ]



//4) Crear la funcion cartProvider(componente funcional) donde tendremos todas las funciones que corresponden al carrito
export const CartProvider = ({defaultValue = [], children}) => {
    const[cart,setCart] = useState(defaultValue);
    const[cartv,setCartv] = useState(defaultValue);

    //7)Armar las funciones necesarias para el carrito(adddToCart,removeFromCart,clearCart,isInCart)
    const clearCart = () => {
        setCart([]);
    }

    
    const addToCart =(item,quantiy,price,nombre) => {
        // console.log
        console.log("item =", item)
        console.log("quantity =", quantiy)
        console.log("price =", price)
        if (isInCart(item)) {//Ya existe en el carrito, 
            const newCart = [...cart] //hacemos copia del carrito :-)
            for (const element of newCart) { //buscl e producto
                if(element.item === item){
                    element.quantiy =element.quantiy + quantiy 
                }
            }
            setCart(newCart);
        }else{
        setCart(
            [
                ...cart,
                {
                    item:item,
                    nombre:nombre,
                    quantiy: quantiy,
                    price: price
                }
            ]
          
        )        
    }
    console.log("el carro tiene: ", cart)   
}


    const carritoActual = () =>{
        setCartv([]);
        setCartv(
            [
                ...cart,              
            ]
        )
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item === id)
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item !==id)
        setCart(newCart)
    }

    const getQuantity   = () => {
        let cantidad= 0
        cart.forEach((element) => cantidad = cantidad + element.quantiy)
        return cantidad
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(element=>{
            total = total + (parseInt(element.quantiy) * element.price )
        })
        return total
    }


    const getTotalPiezas = () => {
        let total = 0
        cart.forEach(element=>{
            total = total + (parseInt(element.quantiy))
        })
        return total
    }

    const MuestraItems = () =>{
        let total = []
        cart.forEach(element=>{
             total = total + "Articulo : " + (element.item)  + " : " + (element.quantiy) +"x $" + (element.price)  +" = $" + element.quantiy * element.price
            // total =  total + 
            // [                f
            //     {
            //         item:element.item,
            //         quantiy: element.quantiy,
            //         price: element.price
            //     }
            // ]
        })
        return total

    }

    const context ={
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        getQuantity,
        getTotal,
        getTotalPiezas,
        MuestraItems,        

    }
// 5) La funcion cartProvider debe devolver el provider(componente) que llevaria como props las funciones del carrito y tener a children como hijo

return(
    <Provider value ={context}>
        {children}
        
    </Provider>
)

}