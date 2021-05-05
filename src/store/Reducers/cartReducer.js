import { CLEAR_ORDER, CREATE_ORDER, FETCH_ORDER, FETCH_SEARCHORDER, LOADING, SEARCH_ORDER} from "../Actions/types";

const initialState = {
  text: '',
  orders: [],
  order:[],
  loading: false,
};
const cartReducer = (state =initialState,action) => {
    
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
        case SEARCH_ORDER:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_SEARCHORDER:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
    }

}
export default cartReducer