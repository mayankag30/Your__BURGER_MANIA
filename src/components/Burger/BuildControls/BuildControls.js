import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>Rs. {props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ele) => (
      <BuildControl
        key={ele.label}
        label={ele.label}
        added={() => props.ingredientAdded(ele.type)}
        removed={() => props.ingredientRemove(ele.type)}
        disabled={props.disabled[ele.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
