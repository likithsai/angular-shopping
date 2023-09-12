import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { MainComponent } from './pages/main/main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AppEffects } from './store/app.effects';
import { appReducer } from './store/app.reducer';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    CartComponent,
    MainComponent,
    ShopComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
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
