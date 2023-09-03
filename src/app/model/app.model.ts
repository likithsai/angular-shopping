export interface Item {
  itemid: string;
  itemname: string;
  itemdesc: string;
  itemimages?: productImages[];
  itemcategory?: ProductCategory[];
  itemnewprice: number;
  itemoldprice: number;
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

export type adminItems = {
  isSaveEnabled: boolean;
};

export interface ItemState {
  productCategory: ProductCategory[];
  productItems: Item[];
  cart: cart;
}

export interface AdminItemState {
  isSaveEnabled: boolean;
  productCategory: ProductCategory[];
  productItems: Item[];
}
