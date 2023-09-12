import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, ItemState } from './model/app.model';
import {
  addToCart,
  loadItems,
  removeFromCart,
  resetCart,
} from './store/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  itemState$: Observable<ItemState> = this.store.select((state) => state.items);
  itemProducts: any;
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    this.itemState$.subscribe((data: ItemState) => {
      this.itemProducts = data;
    });

    this.store.dispatch(loadItems());

    this.addToCart({
      itemid: 'SKU1948750',
      itemname: 'fancy product',
      itemdesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
      itemcategory: [
        { productname: 'software', producticon: 'bi bi-1-circle-fill' },
        {
          productname: 'Hardware',
          producticon: 'bi bi-arrow-down-left-circle-fill',
        },
      ],
      itemnewprice: 18.65,
      itemoldprice: 20.0,
    });

    this.addToCart({
      itemid: 'SKU1948751',
      itemname: 'fancy product',
      itemdesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
      itemcategory: [
        { productname: 'software', producticon: 'bi bi-1-circle-fill' },
        {
          productname: 'Hardware',
          producticon: 'bi bi-arrow-down-left-circle-fill',
        },
      ],
      itemnewprice: 18.82,
      itemoldprice: 20.0,
    });
  }

  addToCart(item: Item) {
    this.store.dispatch(addToCart({ cartItem: item }));
  }

  removeFromCart(itemId: string) {
    this.store.dispatch(removeFromCart({ cartId: itemId }));
  }

  clearCart() {
    this.store.dispatch(resetCart());
  }
}
