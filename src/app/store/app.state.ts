import { AdminItemState, ItemState } from '../model/app.model';

export const initialItemState: ItemState = {
  title: '',
  productCategory: [],
  productItems: [],
  cart: {
    items: [],
    totalamt: 0,
    itemcount: 0,
  },
};
