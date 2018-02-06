import React, { Component } from "react";

import { connect } from "react-redux";

export class Budget extends Component {
    state = {
        whatActuallyShouldBeCalledProfit: 0
    }

    componentWillReceiveProps(nextProps) {
        const {profit, sellExpenses, farmExpanse, deliveryExpanse} = nextProps.budget;
        this.setState({whatActuallyShouldBeCalledProfit: profit - sellExpenses - farmExpanse - deliveryExpanse});
    }

    negative = number => (number * -1);

    render() {
        const {profit, sellExpenses, farmExpanse, deliveryExpanse} = this.props.budget;
        return (
            <div>
                <p>Всего получено денег: <span className="t-profit">{profit}</span></p>
                <p>Расходы продавцов: <span className="t-sellers">{this.negative(sellExpenses)}</span></p>
                <p>Расходы на ферме: <span className="t-farm">{this.negative(farmExpanse)}</span></p>
                <p>Расходы на доставку: <span className="t-delivery">{this.negative(deliveryExpanse)}</span></p>
                <p>Итого: <span className="t-total">{this.state.whatActuallyShouldBeCalledProfit}</span></p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    budget: state.budget
});

export default connect(mapStateToProps)(Budget);
