import axios from 'axios';
import { VIEW_MENUS } from './types';

export const viewMenulist = () =>{
    return (dispatch) => {
         axios
         .get('http://localhost:3001/menus')
         .then(menus =>{
             dispatch({
                 type: VIEW_MENUS,
                 menus
             })
         })
         .catch(error =>{
             console.log(error.response)
         })
     }
}

