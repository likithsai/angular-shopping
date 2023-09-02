import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, ItemState, ProductCategory } from 'src/app/model/app.model';
import { loadAdminItems } from 'src/app/store/app.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  productItems: Item[] = [];
  categoryItems: ProductCategory[] = [];

  constructor(private store: Store<{ admin: ItemState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAdminItems());

    this.store
      .select((state) => state.admin)
      .subscribe((items) => {
        console.log(items);
        this.productItems = items.productItems;
        this.categoryItems = items.productCategory;
      });
  }
}
