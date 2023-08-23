import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { appService } from './../services/app.service';
import * as ItemActions from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private itemService: appService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      mergeMap(() =>
        this.itemService.loadItems().pipe(
          map((items) => {
            console.log('Response:', items); // Log the response data
            return ItemActions.loadItemsSuccess({
              items: {
                productCategory: items.productCategory,
                productItems: items.productItems,
                cart: {
                  items: [],
                  totalamt: 0,
                  itemcount: 0,
                },
              },
            });
          }),
          catchError((error) => of(ItemActions.loadItemsFailure({ error })))
        )
      )
    )
  );
}
