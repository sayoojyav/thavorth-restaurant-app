const categoryReducer = (state=[],action)=>{
    switch (action.type) {
        case "GET_CATEGORY":
            return action.categories.data            
        default:
           return state;
    }
};

export default categoryReducer