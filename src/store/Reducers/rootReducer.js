import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
 const rootReducer =combineReducers ({
    categories: categoryReducer,
    menus: menuReducer,
    carts: orderReducer,
    orders: cartReducer
    
 })
 export default rootReducer