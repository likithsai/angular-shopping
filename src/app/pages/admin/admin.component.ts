import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, ItemState, ProductCategory } from 'src/app/model/app.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  productItems: Item[] = [];
  categoryItems: ProductCategory[] = [];

  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.items)
      .subscribe((items) => {
        this.productItems = items.productItems;
        this.categoryItems = items.productCategory;
      });
  }
}
