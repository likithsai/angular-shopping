import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item, ItemState } from 'src/app/model/app.model';
import {
  addToCart,
  removeFromCart,
  resetCart,
} from 'src/app/store/app.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  productItems: ItemState | undefined;
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit() {
    this.store
      .select((state) => state.items)
      .subscribe((items) => {
        this.productItems = items;
      });

    this.addToCart({
      itemid: 'SKU1948750',
      itemname: 'fancy product',
      itemdesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
      itemcategoryname: 'software',
      itemnewprice: 18.65,
      itemoldprice: 20.0,
    });

    this.addToCart({
      itemid: 'SKU1948751',
      itemname: 'fancy product',
      itemdesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
      itemcategoryname: 'software',
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
