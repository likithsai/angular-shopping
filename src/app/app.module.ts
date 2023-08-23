import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { MainComponent } from './pages/main/main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';
import { AdminDashboardComponent } from './pages/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './pages/admin/components/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './pages/admin/components/admin-categories/admin-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ItemDetailComponent,
    CartComponent,
    MainComponent,
    ShopComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ items: appReducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
