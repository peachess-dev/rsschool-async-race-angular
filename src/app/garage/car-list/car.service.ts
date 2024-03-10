import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/garage`);
  }

  addCar(car: any) {
    return this.http.post(`${this.baseUrl}/garage}`, car);
  }
}

// const baseUrl = "http://127.0.0.1:3000/garage";

// export async function getCars(httpParams) {
//   let url = baseUrl;
//   if (httpParams) url += `?${httpParams}`;
//   return fetch(url).then((res) => {
//     return res.json();
//   });
// }
