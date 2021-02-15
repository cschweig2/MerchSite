import React from 'react';
import PropTypes from 'prop-types';

function ItemDetail(props){
  const {item, onClickingDelete} = props;
  let quantity = item.quantity;
  if(parseInt(quantity) === 0){
    quantity = 'Sorry Bud, No More Left';
  }

  function handleChangeItemQuantityButton(item, isSub, dif){
    dif = parseInt(dif);
    props.onChangingItemQuantityClick({
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: isSub ? (item.quantity === 0 ? 0 : item.quantity = parseInt(item.quantity) - dif) : item.quantity = parseInt(item.quantity) + dif,
      id: item.id
    });
  }

  return(
    <>
      <h1>Item Detail</h1>
      <h3>Item Name: {item.name}</h3>
      <p>Description: {item.description}</p>
      <p>${item.price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick = {()=> handleChangeItemQuantityButton(item, true, 1)}>BUY</button>
      <button onClick= {()=> handleChangeItemQuantityButton(item, false, 10)}>Stock</button>
      <button onClick={props.onClickingEdit}>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </>
  )
}
ItemDetail.propTypes ={
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onChangingItemQuantityClick: PropTypes.func
};

export default ItemDetail;