import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchedItems: any = new ReplaySubject(1);

  constructor() { }

  get searchedItems() {
    return this._searchedItems;
  }

  set searchedItems(items: any) {
    this._searchedItems.next(items);
  }
}
