import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess } from './app.actions';
import { initialItemState } from './app.state';

export const appReducer = createReducer(
  initialItemState,
  on(loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
  }))
);
