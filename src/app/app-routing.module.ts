import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { MainComponent } from './pages/main/main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AdminDashboardComponent } from './pages/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './pages/admin/components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './pages/admin/components/admin-categories/admin-categories.component';
import { AdminSettingsComponent } from './pages/admin/components/admin-settings/admin-settings.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'shop', component: ShopComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'categories', component: AdminCategoriesComponent },
      { path: 'settings', component: AdminSettingsComponent },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
