import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }

  apiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2024-07-13&sortBy=publishedAt&apiKey=c1d857779fd5489ab705cd1fd8bd33f4"

  apiUrl1 = "https://jsonplaceholder.typicode.com/posts"

  apiUrl2 = "https://jsonplaceholder.typicode.com/comments"
  
  getNews():Observable<any>
  {
    return this.http.get(this.apiUrl)

  }

  getPosts():Observable<any>
  {
    return this.http.get(this.apiUrl1)
  }

  getComments():Observable<any>
  {
    return this.http.get(this.apiUrl2)
  }
}