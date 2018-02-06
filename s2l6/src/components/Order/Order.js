import React, { Component } from "react";

class Order extends Component {
    render() {
        const {name, price, createdAt} = this.props;
        return (
            <div className="order">
                <p>Название: {name}</p>
                <p>Цена: {price}</p>
                <p>Создан: {createdAt}</p>
            </div>
        );
    }
}

export default Order;
