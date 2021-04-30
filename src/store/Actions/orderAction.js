import { ADD_PRODUCT_CART, DECREASE_QUANTITY, GET_NUMBERS_CART, INCREASE_QUANTITY,REMOVE_CART } from "./types";

export const addcart = (cart) =>{
    return(dispatch) => {
        console.log("add to the basket");
        console.log("carts:",cart);
        dispatch({
            type:ADD_PRODUCT_CART,
            payload:cart
        })
    }
}

export const getnumber = () =>{
    return(dispatch) => {
        console.log("get the number of basket");
        dispatch({
            type:GET_NUMBERS_CART
        })
    }

}

export const productQuantity = (action,id) =>{
    return(dispatch) => {
        console.log('Inside foodquality');
        console.log('action is:',action)
        console.log("foodid:",id);
        dispatch({
            type:action ==="increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload:id
        })
    }
}

export const removeCart = (id) =>{
    return(dispatch) => {
        console.log("Inside remove cart");
        console.log("removecartid:",id);
        dispatch({
            type:REMOVE_CART,
            payload:id
        })

    }
}