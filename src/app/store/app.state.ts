import { AdminItemState, ItemState } from '../model/app.model';

export const initialItemState: ItemState = {
  productCategory: [],
  productItems: [],
  cart: {
    items: [],
    totalamt: 0,
    itemcount: 0,
  },
};

export const adminItemsState: AdminItemState = {
  productCategory: [],
  productItems: [],
  isSaveEnabled: false,
};
