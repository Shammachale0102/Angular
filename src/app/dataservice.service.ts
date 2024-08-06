import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  course:any;
  user:any;
  msg="Welcome to my first service"
  constructor() { 

  this.course=["Angular","React","Vue","Javascript"] 
  this.user=[
    {
    uname:"ABC",
    Password:123

    },
    {
      uname:"PQR",
      Password:456
    },
    {
      uname:"XYZ",
      Password:789
    }
  ] 
  }
  getData(){
    return this.msg
  }
 
}

