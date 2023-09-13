import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemState } from 'src/app/model/app.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  productItems: ItemState | undefined;
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit() {
    this.store
      .select((state) => state.items)
      .subscribe((items) => {
        this.productItems = items;
      });
  }
}
