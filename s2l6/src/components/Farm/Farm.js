import React, { Component } from "react";
import { moveOrderToCustomer } from "../../actions/farmActions";
import Order from "../Order/Order";

import { connect } from "react-redux";


export class Farm extends Component {
    state = {
        buttonDisabled: true
    }

    componentWillReceiveProps(nexProps) {
        this.setState({buttonDisabled: nexProps.farm.orders.length === 0});
    }

    moveOldestOrderToCustomer = () => {
        const latestOrder = this.props.farm.orders[0];

        this.props.moveOrderToCustomer(latestOrder);
    }

    render() {
        const {farm} = this.props;
        return (
            <div>
                <button disabled={this.state.buttonDisabled}  onClick={this.moveOldestOrderToCustomer}>Отправить урожай клиенту</button>
                <div className="orders">
                    {farm.orders.map((order, i) => (
                        <Order key={i} name={order.name} price={order.price} createdAt={order.createdAt.toString()} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    farm: state.farm
});

const mapDispatchToProps = (dispatch) => {
    return {
        moveOrderToCustomer: (order) => {
            dispatch(moveOrderToCustomer(order))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
