import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from '../model/app.model';

const shoppingData = createFeatureSelector<ItemState>('shoppingData');

export const productData = createSelector(
  shoppingData,
  (state) => state.productItems
);

export const cartData = createSelector(shoppingData, (state) => state.cart);
