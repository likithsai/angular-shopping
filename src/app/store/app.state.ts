export interface Item {
  id: string;
  name: string;
  price: number;
}

export interface ItemState {
  items: Item[];
  cart: Item[];
}

export const initialItemState: ItemState = {
  items: [],
  cart: [],
};
