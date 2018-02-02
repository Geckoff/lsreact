import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switcher extends Component {
    state = {
        selectedChild: 0
    }

    static childContextTypes = {
        selectedChild: PropTypes.number
    };

    getChildContext() {
        return {selectedChild: this.state.selectedChild};
    }

    handleChangeChild = e => {
        const id = parseInt(e.target.dataset.id, 10);
        this.setState({selectedChild: id});
    }

    render() {
        const { children } = this.props;
        return (
            <div className="switcher">
                {children.map((child, i) => (
                    <p className="component-list__name" onClick={this.handleChangeChild} data-id={i} key={i}>{(child.type.displayName) ? child.type.displayName: child.type.name}</p>
                ))}
                <hr />
                {React.Children.map(children, (child, i) => {
                    return (this.state.selectedChild === i) ? child : null;                    
                })}                          
            </div>            
        );
    }
}

export default Switcher;