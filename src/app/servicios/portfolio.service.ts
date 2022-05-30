import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string="http://localhost:8080/api"
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    console.log('El portfolioService está corriendo')
    //return this.http.get('./assets/data/data.json');
    return this.http.get<any>(this.url+"/persona/1");
  }
}
