import React from 'react';
import PropTypes from "prop-types";

function Item(props) {
  let quantity = props.quantity;
  if(parseInt(quantity) === 0){
    quantity = 'out of stock';
  }
  return(
    <React.Fragment>
      <div onClick ={() => props.whenItemClicked(props.id)}>
        <li>{props.name} : {quantity}</li>
      </div>
    </React.Fragment>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  whenItemClicked: PropTypes.func
}

export default Item;