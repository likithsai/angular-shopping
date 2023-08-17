export interface Item {
  itemid: string;
  itemname: string;
  itemdesc: string;
  itemimages: productImages[];
  itemcategoryname: string;
  itemnewprice: number;
  itemoldprice: number;
}

export interface productImages {
  productimgurl: string;
  productimgalt: string;
}
export interface cart extends Item {
  totalcart: number;
}

export interface ItemState {
  items: Item[];
  cart: cart[];
}
