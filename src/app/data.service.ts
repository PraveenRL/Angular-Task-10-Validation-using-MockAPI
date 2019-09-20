import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  check: any;

  constructor(private http : HttpClient) { }
  regData(value){
    return this.http.post('https://5d3c1d02301f26001416ac6c.mockapi.io/services',value)
    .pipe(map(data => this.check = data))
  }
  getData(){
    return this.http.get('https://5d3c1d02301f26001416ac6c.mockapi.io/services')
    .pipe(map(data => this.check = data))
  }
}
