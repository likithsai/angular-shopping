import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemState, ProductCategory } from 'src/app/model/app.model';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent {
  productCategories: ProductCategory[] = [];
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.items.productCategory)
      .subscribe((items) => {
        console.log(items);
        this.productCategories = items;
      });
  }
}
