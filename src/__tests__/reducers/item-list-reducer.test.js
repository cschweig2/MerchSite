import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;
  const currentState = {
    1: {
      name: 'Coozie',
    description: 'Keep yer beer cold and hand warm',
    price: 4.99,
    quantity: 10,
    id: 1
    },
    2: {
      name: 'T-shirt',
      description: 'Cover your nips',
      price: 12.99,
      quantity: 3,
      id: 2
    }
  }
  const itemData = {
    name: 'Coozie',
    description: 'Keep yer beer cold and hand warm',
    price: 4.99,
    quantity: 10,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(itemListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to masterItemList', () => {
    const { name, description, price, quantity, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(itemListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });
  test('Should successfully delete an item', () => {
    action = {
      type: "DELETE_ITEM",
      id: 1,
    };
    expect(itemListReducer(currentState, action)).toEqual({
      2: {
        name: 'T-shirt',
      description: 'Cover your nips',
      price: 12.99,
      quantity: 3,
      id: 2
      }
    });
  });

});