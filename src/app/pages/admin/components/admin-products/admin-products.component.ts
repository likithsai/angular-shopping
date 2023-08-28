import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/app.model';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  productItems$: Item[] = [];

  constructor(private router: Router) {
    this.productItems$ = this.router.getCurrentNavigation()?.extras
      .state as Item[];
  }

  ngOnInit(): void {}
}
