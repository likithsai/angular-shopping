import { Actions, createEffect, ofType } from '@ngrx/effects';
import { appService } from '../services/app.service';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as ItemActions from './app.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private itemService: appService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      mergeMap(() =>
        this.itemService.loadItems().pipe(
          map((items) => ItemActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemActions.loadItemsFailure({ error })))
        )
      )
    )
  );
}
