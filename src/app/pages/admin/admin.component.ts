import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, ItemState } from 'src/app/model/app.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  productItems$: Item[] = [];
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.items.productItems)
      .subscribe((items) => {
        this.productItems$ = items;
      });
  }
}
