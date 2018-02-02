import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardNumberInput extends Component {

    constructor(props) {
        super(props);
        const formattedCcNumber = this.format(props.cardNumber);
        
        this.state = {
            number: formattedCcNumber
        } 
    }

    componentWillReceiveProps(nextProps) {
        this.setState({number: this.format(nextProps.cardNumber)})
    }

    format = (ccNumber) => {
        return ccNumber ? ccNumber.toString().match(/.{1,4}/g).join(' ') : '';
    }    

    normalize = (ccNumber) => {
        return ccNumber.replace(/\s/g, '');
    }

    saveCCnumber = (e) => {
        this.props.onChange(this.normalize(e.target.value));
    }

    render() {
        return (
            <div>
                <input onChange={this.saveCCnumber} value={this.state.number} />
            </div>
        );
    }
}

export default CardNumberInput;