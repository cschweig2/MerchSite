import React from 'react';
import ItemList from './ItemList';
//import AddItem from'./AddItem';
import ItemCreationForm from './ItemCreationForm';
import ItemDetails from './ItemDetails';
import EditItemForm from './EditItemForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => { 
    if (this.state.selectedItem != null){
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
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
    this.setState({
      formVisibleOnPage: false
    });
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
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
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
    const editedMasterItemList = this.state.masterItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      masterItemList: editedMasterItemList,
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
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ItemCreationForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = 
      <ItemList 
      itemList={this.state.masterItemList} 
      onItemSelection={this.handleChangingSelectedItem}/>;
      buttonText = "Add Item";
    }

    return(
      <React.Fragment>
        {this.state.masterItemList[0] === undefined && 
        currentlyVisibleState.props.items !== undefined ? "There are no items currently in the store." : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </ React.Fragment>
    )
  }
}
ItemControl.propTypes = {
  masterItemList: PropTypes.object
};
const mapStateToProps = state => {
  return {
    masterItemList: state
  }
}
ItemControl = connect(mapStateToProps)(ItemControl);

export default ItemControl;