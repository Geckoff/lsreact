import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';
import PropTypes from 'prop-types';

class CardNumberHolder extends Component {

    static displayName = 'Card number formating';

    state = {
        cardNumber: ''
    }

    handleChange = (ccNumber) => {
        this.setState({cardNumber: ccNumber});
    }

    static propTypes = {
        cardNumber: PropTypes.number
    }

    render() {
        return (
            <div>
                <CardNumberInput onChange={this.handleChange} cardNumber={this.state.cardNumber}  />
            </div>
        );
    }
}

export default CardNumberHolder;