import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initState = {
    orders: []
};

export default (state = initState, action) => {

    switch (action.type) {
        case CREATE_ORDER:
            return {
                orders: [
                    ...state.orders,
                    action.payload
                ]
            };

        case MOVE_ORDER_TO_FARM:
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
