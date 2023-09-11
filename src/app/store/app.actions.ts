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

export const resetCart = createAction('[Cart] Clear from cart');
