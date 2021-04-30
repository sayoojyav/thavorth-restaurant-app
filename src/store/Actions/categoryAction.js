import axios from 'axios';
import { GET_CATEGORY } from './types';

 export const getCategory = () => {
     return (dispatch) => {
         axios
         .get('http://localhost:3001/categories')
         .then(categories =>{
             dispatch({
                 type: GET_CATEGORY,
                 categories
             })
         })
         .catch(error =>{
             console.log(error.response)
         })
     }
 }

 