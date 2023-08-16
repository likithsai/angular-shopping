import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from 'src/app/store/app.actions';
import { Item, ItemState } from 'src/app/store/app.state';

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
  }
}
