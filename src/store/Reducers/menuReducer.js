const menuReducer = (state=[],action) => {
    switch (action.type) {
        case "VIEW_MENUS":
            return action.menus.data
        default:
          return state;
    }
};

export default menuReducer