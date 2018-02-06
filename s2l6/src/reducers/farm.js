import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";

const initState = {
    orders: []
};

export default (state = initState, action) => {

    switch (action.type) {
        case MOVE_ORDER_TO_FARM:
            return {
                orders: [
                    ...state.orders,
                    action.payload
                ]
            };

        case MOVE_ORDER_TO_CUSTOMER:
            const id = action.payload.id;            
            const updatedOrders = state.orders.filter((order) => {
                return order.id !== id;
            })

            return {
                orders: updatedOrders   
            }


        default:
            return state;
    }
};
