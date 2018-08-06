import React, { Component } from 'react';

import ReactAux from '../../../hoc/ReactAux/ReactAux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be a functional component, doesn't have to be a class
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span>: 
                        {this.props.ingredients[igKey]}
                </li>
            );
        });
    
        return (
            <ReactAux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button 
                    btnType="Danger" 
                    clicked={this.props.purchaseCanceled}>
                    CANCEL
                </Button>
                <Button 
                    btnType="Success" 
                    clicked={this.props.purchaseContinue}>
                    CONTINUE
                </Button>
            </ReactAux>
        );
    }
};

export default OrderSummary;