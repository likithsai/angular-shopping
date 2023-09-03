import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/model/app.model';
import { addProduct } from 'src/app/store/app.actions';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  productItems$: Item[] = [];

  constructor(private router: Router, private store: Store) {
    this.productItems$ = this.router.getCurrentNavigation()?.extras
      .state as Item[];
  }

  ngOnInit(): void {}

  addNewProduct() {
    this.store.dispatch(
      addProduct({
        items: {
          itemid: 'SKU1948750',
          itemname: 'fancy product',
          itemdesc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a mi ultrices nunc blandit suscipit.',
          itemimages: [
            {
              productimgurl:
                'https://www.oskargydell.com/wp-content/uploads/2017/08/Product-image-600x600-leather-Red-PVD.png',
              productimgalt: 'simple image',
            },
          ],
          itemnewprice: 18.0,
          itemoldprice: 20.0,
        },
      })
    );
  }
}
