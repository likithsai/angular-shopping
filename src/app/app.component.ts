import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToCart,
  loadItems,
  removeFromCart,
  resetCart,
} from './store/app.actions';
import { Item, ItemState } from './model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());

    this.addToCart({
      itemid: 'SKU1948750',
      itemname: 'fancy product',
      itemdesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
      itemcategoryname: 'software',
      itemnewprice: 18.65,
      itemoldprice: 20.0,
      itemfilepath: '',
    });

    this.addToCart({
      itemid: 'SKU1948751',
      itemname: 'fancy product',
      itemdesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
      itemcategoryname: 'software',
      itemnewprice: 18.82,
      itemoldprice: 20.0,
      itemfilepath: '',
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
