import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../store/app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class appService {
  private itemsUrl = 'assets/data.json'; // Path to your JSON file

  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$: Observable<Item[]> = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
