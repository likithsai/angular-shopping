import { Item } from 'src/app/model/app.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mapTo, mergeMap, of, switchMap, tap } from 'rxjs';
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
            // console.log('Response:', items); // Log the response data
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

  loadAdminItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadAdminItems),
      mergeMap(() =>
        this.itemService.loadItems().pipe(
          map((items) => {
            console.log('Response:', items); // Log the response data
            return ItemActions.loadAdminItemsSuccess({
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
          catchError((error) =>
            of(ItemActions.loadAdminItemsFailure({ error }))
          )
        )
      )
    )
  );

  //  add admin product categories
  addProductCategory$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ItemActions.addProduct,
          ItemActions.removeProduct,
          ItemActions.addProductCategory,
          ItemActions.removeProductCategory
        ),
        map(() => {
          console.log('Action called');
          return of(ItemActions.adminSaveEnabled({ status: true }));
        })
      ),
    { dispatch: false }
  );
}
