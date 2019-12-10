import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //This could be a functional component, doesn't have to be class only for debugging purposes
    componentWillUpdate(){
        console.log("Ordersummary Updates")
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Aux>
                <h3>Your Order:</h3>
                <p>Ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong> Total price: {this.props.price.toFixed(2)} </strong></p>
                <Button btnType='Success' clicked={this.props.purchasedCheckout}>Checkout</Button>
                <Button btnType='Danger' clicked={this.props.purchasedCancel}>Cancel</Button>
            </Aux>
        )
    }
}

export default OrderSummary;