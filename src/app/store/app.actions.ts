import { createAction, props } from '@ngrx/store';
import { Item, ItemState, ProductCategory } from '../model/app.model';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ items: ItemState }>()
);
export const loadItemsFailure = createAction(
  '[Item] Load Items Failure',
  props<{ error: any }>()
);

// cart functionality
export const addToCart = createAction(
  '[Cart] Add item to cart',
  props<{ cartItem: Item }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item From Cart',
  props<{ cartId: string }>()
);

// admin functionality
export const loadAdminItems = createAction('[Item] Load Admin Items');

export const loadAdminItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ items: ItemState }>()
);

export const loadAdminItemsFailure = createAction(
  '[Item] Load Items Failure',
  props<{ error: any }>()
);

export const adminSaveEnabled = createAction(
  '[Admin] Save btn enabled',
  props<{ status: boolean }>()
);

export const addProduct = createAction(
  '[Admin] Add product',
  props<{ items: Item }>()
);

export const removeProduct = createAction(
  '[admin] remove product',
  props<{ productId: string }>()
);

export const addProductCategory = createAction(
  '[admin] add product category',
  props<{ category: ProductCategory }>()
);

export const removeProductCategory = createAction(
  '[admin] remove product category',
  props<{ categoryName: string }>()
);

export const resetCart = createAction('[Cart] Clear from cart');
