import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { initialItemState } from './app.state';
import { Item } from '../model/app.model';

const calculateCartTotalAndCount = (items: Item[]) => {
  const totalamt = items
    .map((item) => item.itemnewprice)
    .reduce((prev, next) => prev + next);
  const itemcount = items.length;
  return { totalamt, itemcount };
};

const updatecartItem = (state: any, items: Item[]) => {
  return {
    ...state,
    cart: {
      items: items,
      ...calculateCartTotalAndCount(items),
    },
  };
};

export const appReducer = createReducer(
  initialItemState,
  on(AppActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
  })),

  //  cart items
  on(AppActions.addToCart, (state, { cartItem }) => {
    const items = [...state.cart.items, cartItem];
    return updatecartItem(state, items);
  }),
  on(AppActions.removeFromCart, (state, { cartId }) => {
    const items: Item[] = state.cart.items.filter(
      (item) => item.itemid !== cartId
    );
    return updatecartItem(state, items);
  }),
  on(AppActions.resetCart, (state) => {
    const items: Item[] = [];
    return updatecartItem(state, items);
  })
);
