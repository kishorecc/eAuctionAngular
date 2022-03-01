import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';
import { product } from './viewbids/viewbidsmodel';
import { buyer } from './viewbids/viewbidsmodel';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private api_url: string = 'https://e-auctionnetapi.azurewebsites.net/api/seller/';

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllProducts(): Observable<product[]> {
    return this.httpClient.get<product[]>(`${this.api_url}/get-products`);
    
    
  }


  
  }

