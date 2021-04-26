import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import menuReducer from './menuReducer';
 const rootReducer =combineReducers ({
    categories: categoryReducer,
    menus: menuReducer
 })
 export default rootReducer