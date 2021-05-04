import { CLEAR_ORDER, CREATE_ORDER, FETCH_ORDER, REMOVE_CART } from './types';


export const createOrder = (orders) => (dispatch) => {
    console.log("storing data:",orders)
    fetch(" http://localhost:3001/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orders),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      
    });
 }
 export const clearOrder = () =>(dispatch) => {
     dispatch({
         type:CLEAR_ORDER
     })
 }

 export const fetchOrder = () => (dispatch) => {
     fetch("http://localhost:3001/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_ORDER, payload: data });
    });
 }

