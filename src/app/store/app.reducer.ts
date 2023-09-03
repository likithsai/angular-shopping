import { ItemState } from 'src/app/model/app.model';
import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { adminItemsState, initialItemState } from './app.state';
import { Item } from '../model/app.model';

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

export const adminReducer = createReducer(
  adminItemsState,
  on(AppActions.loadAdminItemsSuccess, (state, { items }) => ({
    ...state,
    productCategory: items.productCategory,
    productItems: items.productItems,
  })),
  on(AppActions.adminSaveEnabled, (state, { status }) => ({
    ...state,
    isSaveEnabled: status,
  })),
  on(AppActions.addProduct, (state, { items }) => ({
    ...state,
    productItems: [...state.productItems, items],
  })),
  on(AppActions.addProductCategory, (state, { category }) => ({
    ...state,
    productCategory: [...state.productCategory, category],
  })),
  on(AppActions.removeProduct, (state, { productId }) => {
    const items = state.productItems.filter((itm) => itm.itemid !== productId);
    return { ...state, productItems: items };
  }),
  on(AppActions.removeProductCategory, (state, { categoryName }) => {
    const items = state.productCategory.filter(
      (itm) => itm.productname !== categoryName
    );
    return { ...state, productCategory: items };
  })
);

export const appReducer = createReducer(
  initialItemState,
  on(AppActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
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
