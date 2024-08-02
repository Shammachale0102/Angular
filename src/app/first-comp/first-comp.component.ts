import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  Employees=[
    {
      ename:"john",
      sal:999999,
      country:"us",
      deptno:20,
      role:"Admin"
    },
    {
      ename:"Rohit",
      sal:8888888,
      country:"uk",
      deptno:10,
      role:"Manager"
    },
    {
      ename:"Sham",
      sal:1000000000,
      country:"india",
      deptno:50,
      role:"CEO"
    }
  ]
  
  

}
