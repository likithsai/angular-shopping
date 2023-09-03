import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AdminItemState,
  Item,
  ItemState,
  ProductCategory,
} from 'src/app/model/app.model';
import { adminSaveEnabled, loadAdminItems } from 'src/app/store/app.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  productItems: Item[] = [];
  categoryItems: ProductCategory[] = [];
  isSaveEnabled$: Observable<boolean> = this.store.select(
    (state) => state.admin.isSaveEnabled
  );

  constructor(private store: Store<{ admin: AdminItemState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadAdminItems());
    this.store
      .select((state) => state.admin)
      .subscribe((items) => {
        this.productItems = items.productItems;
        this.categoryItems = items.productCategory;
      });
  }
}
