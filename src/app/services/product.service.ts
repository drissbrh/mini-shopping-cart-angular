import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pipe } from 'rxjs';
import { Sneaker } from '../common/sneaker';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  sneakers: Sneaker[] = [];
  baseUrl: string = 'http://localhost:5000/api/';
  constructor(private httpClient: HttpClient) {}

  getAllSneakers(): Observable<Sneaker[]> {
    return this.httpClient.get<Sneaker[]>(this.baseUrl + 'sneakers');
  }

  getASneaker(id: string): Observable<Sneaker> {
    return this.httpClient.get<Sneaker>(`${this.baseUrl}sneakers/${id}`);
  }
}
