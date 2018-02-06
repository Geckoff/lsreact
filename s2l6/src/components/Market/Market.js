import React, { Component } from "react";
import "./Market.css";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
import Order from "../Order/Order";

import { connect } from "react-redux";
let id = 0;
const getId = () => {
    id += 1;
    return id;
};
export const vegetables = [
    "Капуста",
    "Редиска",
    "Огурцы",
    "Морковь",
    "Горох",
    "Баклажан",
    "Тыква",
    "Чеснок",
    "Лук",
    "Перец",
    "Картофель",
    "Редька"
];

const getNewOrder = () => {
    return {
        id: getId(),
        name: vegetables[Math.floor(Math.random() * vegetables.length)],
        price: 100 + Math.floor(Math.random() * 100),
        createdAt: new Date()
    };
};

const getNumber = () => {
    const number = Math.floor(Math.random() * 10);
    console.log(number); 
    return number;
}

export class Market extends Component {
    state = {
        buttonDisabled: true,
        lastOrder: {}
    }

    componentWillReceiveProps(nexProps) {
        this.setState({buttonDisabled: nexProps.market.orders.length === 0});
    }

    saveNewOrder = () => {
        this.props.createOrder(getNewOrder());
    }

    moveOldestOrderToFarm = () => {
        const latestOrder = this.props.market.orders[0];
        this.props.moveOrderToFarm(latestOrder);
    }

    render() {
        const {market} = this.props;
        return (
            <div>
                <button className="new-orders__create-button" onClick={this.saveNewOrder}>Создать заказ</button>
                <button disabled={this.state.buttonDisabled}  onClick={this.moveOldestOrderToFarm}>Отправить заказ на ферму</button>
                <div className="orders">
                    {market.orders.map((order, i) => (
                        <Order key={i} name={order.name} price={order.price} createdAt={order.createdAt.toString()} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    market: state.market
});

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (order) => {
            dispatch(createOrder(order))
        },
        moveOrderToFarm: (order) => {
            dispatch(moveOrderToFarm(order))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
