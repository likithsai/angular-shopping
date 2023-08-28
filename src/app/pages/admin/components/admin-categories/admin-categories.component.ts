import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/model/app.model';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent {
  productCategories: ProductCategory[] = [];

  constructor(private router: Router) {
    this.productCategories = this.router.getCurrentNavigation()?.extras
      .state as ProductCategory[];
  }

  ngOnInit(): void {}
}
