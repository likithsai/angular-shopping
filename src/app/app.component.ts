import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from './store/app.actions';
import { ItemState } from './model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<{ items: ItemState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }
}
