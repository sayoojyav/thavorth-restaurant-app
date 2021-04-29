import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';
import orderReducer from './orderReducer';
 const rootReducer =combineReducers ({
    categories: categoryReducer,
    menus: menuReducer,
    carts: orderReducer,
    
 })
 export default rootReducer