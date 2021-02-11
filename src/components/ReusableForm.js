import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <textarea
          name='description'
          placeholder='Item Description' />
        <input
          type='text'
          name='price'
          placeholder='Item Price' />
        <input
          type='text'
          name='quantity'
          placeholder='Item Quantity' />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;