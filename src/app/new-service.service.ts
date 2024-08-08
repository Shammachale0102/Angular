import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor(private http: HttpClient) { }
  apiurl = "https://newsapi.org/v2/everything?q=apple&from=2024-08-07&to=2024-08-07&sortBy=popularity&apiKey=da0f4427672b41b6884430015550d40f"

  getNews():Observable<any>{
    return this.http.get(this.apiurl)
  }
}
