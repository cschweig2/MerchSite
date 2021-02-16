import React from 'react';
import ItemList from './ItemList';
import ItemCreationForm from './ItemCreationForm';
import ItemDetails from './ItemDetails';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false, - no longer needed, handled by Redux
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null){
      this.setState({
        // formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action)
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = newItem;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = itemToEdit;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.props.masterItemList[id];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    this.setState({selectedItem: null});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({editing: true});
  }

  handleChangeItemQuantityClick = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, price, quantity } = itemToEdit;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({
    });
  }

  render() {

    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState =
      <EditItemForm
      item = {this.state.selectedItem}
      onEditItem = {this.handleEditingItemInList}/>
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null){
      currentlyVisibleState =
      <ItemDetails
      item = {this.state.selectedItem}
      onClickingDelete = {this.handleDeletingItem}
      onClickingEdit = {this.handleEditClick}
      onChangingItemQuantityClick = {this.handleChangeItemQuantityClick}/>
      buttonText = "Return to Item List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <ItemCreationForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState =
      <ItemList
      itemList={this.props.masterItemList}
      onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item";
    }

    return(
      <React.Fragment>
        {this.props.masterItemList[0] === undefined &&
        currentlyVisibleState.props.items !== undefined ? "There are no items currently in the store." : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    )
  }
}

ItemControl.propTypes = {
  masterItemList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterItemList: state.masterItemList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;