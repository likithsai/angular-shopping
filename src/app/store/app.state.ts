export interface Item {
  id: string;
  name: string;
  price: number;
}

export interface ItemState {
  items: Item[];
  cart: string[];
}

export const initialItemState: ItemState = {
  items: [],
  cart: [],
};
