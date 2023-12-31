import { createReducer, on } from '@ngrx/store';
import { Item } from '../model/app.model';
import * as AppActions from './app.actions';
import { initialItemState } from './app.state';

const updatecartItem = (state: any, items: Item[]) => {
  const totalamt = items
    .map((item) => item.itemnewprice)
    .reduce((prev, next) => prev + next);
  const itemcount = items.length;

  return {
    ...state,
    cart: {
      items: items,
      ...{ totalamt, itemcount },
    },
  };
};

export const appReducer = createReducer(
  initialItemState,
  on(AppActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    title: items.title,
    productCategory: items.productCategory,
    productItems: items.productItems,
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
