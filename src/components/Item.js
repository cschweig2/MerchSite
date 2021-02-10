import React from 'react';
import PropTypes from "prop-types";

function Item(props) {
  return(
    <React.Fragment>
      <div onClick ={() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Description:{props.description}</p>
        <p>Price: ${props.price}</p>
        <p>Quantity: {props.quantity}</p>
      </div>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  whenItemClicked: PropTypes.func
}

export default Item;