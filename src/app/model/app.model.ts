export interface Item {
  itemid: string;
  itemname: string;
  itemdesc: string;
  itemimages?: productImages[];
  itemcategory: ProductCategory[];
  itemnewprice: number;
  itemoldprice: number;
  itemfilepath: string;
}

export interface ProductCategory {
  productname: string;
  producticon: string;
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
  productCategory: ProductCategory[];
  productItems: Item[];
  cart: cart;
}
