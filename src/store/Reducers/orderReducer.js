import { ADD_PRODUCT_CART,DECREASE_QUANTITY,GET_NUMBERS_CART, INCREASE_QUANTITY } from "../Actions/types";

const initialState = {
    cartnumbers:0,
    cartcost:0,
    carts:{}
}


const orderReducer = (state =initialState,action) => {
    let foodSelected = "";
    switch (action.type) {
        case ADD_PRODUCT_CART:
          foodSelected ={
              id:action.payload.id,
              name:action.payload.name,
              description:action.payload.description,
              photo:action.payload.photo,
              numbers:action.payload.numbers,
              inCart:action.payload.inCart,
              price:action.payload.price
            }
            foodSelected.numbers +=1;
            foodSelected.inCart =true;
            console.log(foodSelected)
            return{
                ... state,               
                cartnumbers:state.cartnumbers+1,            
                cartcost:state.cartcost + foodSelected.price,
                carts:{
                    ...state.carts,
                    [action.payload.id]:foodSelected
                }
            }
        case GET_NUMBERS_CART:
            return{
                ...state
            }
        case INCREASE_QUANTITY:
            state.carts[action.payload].numbers++;
            return{
                ...state,
                cartnumbers:state.cartnumbers+1,
                cartcost:state.cartcost + state.carts[action.payload].price,
                carts:{
                    ...state.carts,
                    [action.payload.id]:foodSelected
                }
            }
        case DECREASE_QUANTITY:
            let quantity = state.carts[action.payload].numbers;
            if(quantity>1){
                state.cartnumbers--;
                state.carts[action.payload].numbers--;
            }      
            return{
                ...state,
                cartnumbers:state.cartnumbers--,
                cartcost:state.cartcost - state.carts[action.payload].price,
                carts:{
                    ...state.carts,
                    [action.payload.id]:foodSelected
                }
            }
        default:
            return state;
          
    }
}

export default orderReducer