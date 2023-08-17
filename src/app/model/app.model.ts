export interface Item {
  id: string;
  name: string;
  oldprice: number;
  newprice: number;
}

export interface ItemState {
  items: Item[];
  cart: Item[];
}
