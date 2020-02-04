import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InformationCharactersService {

  private apiUrl = 'https://api.got.show/api/show/characters/';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
  getDataByName(name: string) {
    const newApiUrl = this.apiUrl + name;
    return this.httpClient.get(newApiUrl);
  }
  
}
