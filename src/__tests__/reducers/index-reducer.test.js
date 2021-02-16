import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import itemListReducer from '../../reducers/item-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
    

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterItemList: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_ITEM action works for formVisibleReduce and root reducer', () => {
    const action = { 
      type: 'ADD_ITEM',
      name: 'T-shirt',
      description: 'Cover your nips',
      price: 12.99,
      quantity: 3,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterItemList).toEqual(itemListReducer(undefined, action));
  })

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });


});