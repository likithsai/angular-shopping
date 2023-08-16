import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemState } from 'src/app/store/app.state';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  query: Params = {};
  productItems: ItemState | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private store: Store<{ items: ItemState }>
  ) {
    this.activeRoute.queryParams.subscribe((qp) => {
      this.query = this.activeRoute.snapshot.params;
    });
  }

  ngOnInit() {
    this.store
      .select((state) => state.items)
      .subscribe((items) => {
        this.productItems = items;
      });
  }
}
