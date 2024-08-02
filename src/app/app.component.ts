import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp1';

loggedIn=false;

Employees=[
  {
    ename:"john",
    sal:50000,
    country:"us",
    deptno:20,
    role:"Admin"
  },
  {
    ename:"Rohit",
    sal:8888888,
    country:"uk",
    deptno:10,
    role:"Admin"
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
