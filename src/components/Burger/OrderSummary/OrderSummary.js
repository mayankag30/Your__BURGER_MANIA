import React, { Component } from "react";

import Aux from "../../../hoc/Auxi/Auxi";
import Button from "../../UI/Button/Button";

class orderSummary extends Component {
  // This could be a functional component, does not have to be a class component
  // componentWillUpdate() {
  //   console.log("[Order Summary] Will Update");
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    // <li>Salad: 1</li>

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: Rs.{this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default orderSummary;
