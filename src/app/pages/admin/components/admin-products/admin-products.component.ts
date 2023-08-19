import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemState } from 'src/app/model/app.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  productItems: any;
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store
      .select((state) => state.items)
      .subscribe((items) => {
        this.productItems = items;
      });
  }
}
