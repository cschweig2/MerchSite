import React from 'react';
import PropTypes from 'prop-types';

function EditItemForm(props){
  const { item } = props;

  function handleEditItemFormSubmission(e) {
    e.preventDefault();
    props.onEditItem({
      name: e.target.name.value, 
      description: e.target.description.value, 
      price: e.target.price.value, 
      quantity: e.target.quantity.value, 
      id: item.id})
  }

  return (
    <>
      <form onSubmit={handleEditItemFormSubmission}>
        <input
          type='text'
          name='name'
          defaultValue={item.name}
          placeholder="Item Name"/>
        <textarea
          name='description'
          defaultValue= {item.description}
          placeholder='Item Description' />
        <input
          type='float'
          name='price'
          defaultValue={parseFloat(item.price)}
          placeholder='Item Price' />
        <input
          type='number'
          name='quantity'
          defaultValue={parseInt(item.quantity)}
          placeholder='Item Quantity' />
        <button type="submit">Update Item</button>
      </form>
    </>
    
  );
}

EditItemForm.propTypes = {
  ticket: PropTypes.object,
  onEditItem: PropTypes.func
}

export default EditItemForm;