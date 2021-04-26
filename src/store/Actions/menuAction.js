import axios from 'axios';

export const viewMenulist = () =>{
    return (dispatch) => {
         axios
         .get('http://localhost:3001/menus')
         .then(menus =>{
             dispatch({
                 type: "VIEW_MENUS",
                 menus
             })
         })
         .catch(error =>{
             console.log(error.response)
         })
     }
}

