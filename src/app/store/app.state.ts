import { ItemState } from '../model/app.model';

export const initialItemState: ItemState = {
  productItems: [],
  cart: {
    items: [],
    totalamt: 0,
    itemcount: 0,
  },
};
