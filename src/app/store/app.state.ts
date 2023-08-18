import { ItemState } from '../model/app.model';

export const initialItemState: ItemState = {
  items: [],
  cart: {
    items: [],
    totalamt: 0,
    itemcount: 0,
  },
};
