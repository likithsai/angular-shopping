import { createAction, props } from '@ngrx/store';
import { Item } from '../model/app.model';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ items: Item[] }>()
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
