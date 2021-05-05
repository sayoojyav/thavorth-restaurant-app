import { CLEAR_ORDER, CREATE_ORDER, FETCH_ORDER, FETCH_SEARCHORDER, LOADING, REMOVE_CART, SEARCH_ORDER } from './types';
import axios from 'axios';

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

export const searchOrder = (text) => (dispatch) => {
  console.log("searchorder text:",text)
  dispatch({
    type:SEARCH_ORDER,
    payload:text

  })
}

export const fetchsearchOrder = id => dispatch => {
  axios
    .get(`http://localhost:3001/orders/${id}`)
    .then(response =>
      dispatch({
        type: FETCH_SEARCHORDER,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
}

export const setLoading = () => {
  return {
    type: LOADING
  };
}