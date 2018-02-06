import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initState = {
    profit: 0,
    sellExpenses: 0,
    farmExpanse: 0,
    deliveryExpanse: 0
};

export default (state = initState, action) => {
    const {profit, sellExpenses, farmExpanse, deliveryExpanse} = state;

    switch (action.type) {
        case CREATE_ORDER:
            return { 
                ...state, 
                profit: profit + action.payload.price,
                sellExpenses: sellExpenses + 20
            };

        case MOVE_ORDER_TO_FARM:
            return { 
                ...state, 
                farmExpanse: farmExpanse + 100
            };

        case MOVE_ORDER_TO_CUSTOMER:
            return { 
                ...state, 
                deliveryExpanse: deliveryExpanse + 20
            };

        default:
            return state;
    }
};
