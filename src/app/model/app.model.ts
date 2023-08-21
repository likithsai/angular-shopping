export interface Item {
  itemid: string;
  itemname: string;
  itemdesc: string;
  itemimages?: productImages[];
  itemcategoryname: string;
  itemnewprice: number;
  itemoldprice: number;
  itemfilepath: string;
}

export interface productImages {
  productimgurl: string;
  productimgalt: string;
}
export interface cart {
  items: Item[];
  totalamt: number;
  itemcount: number;
}

export interface ItemState {
  productItems: Item[];
  cart: cart;
}
