import { CLEAR_ORDER, CREATE_ORDER, FETCH_ORDER} from "../Actions/types";


const cartReducer = (state ={},action) => {
    
    switch (action.type) {        
        case CREATE_ORDER:
            return {
               orders:action.payload
            }
        case CLEAR_ORDER:
            return {
                orders:null
            }
        case FETCH_ORDER:
            return { 
                orders: action.payload 
            }
        default:
            return state;
    }

}
export default cartReducer