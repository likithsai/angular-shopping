import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  query: Params = {};

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((qp) => {
      this.query = this.activeRoute.snapshot.params;
    });
  }
}
