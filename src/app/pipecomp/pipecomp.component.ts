import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent {

  title ='my-first-app';
  todaydate =new Date();
  jsonval = {name:'Alex', age:'25', address:{a1:'paris',a2: 'France'}};
  months =['Jan','Feb','Mar',' April','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];
  employee = [
    {
      ename: "John",
      country: "US",
      Sal: 20000,
      gender: "Male"
    },
    {
      ename: "Rohit",
      country: "India",
      Sal: 30000,
      gender: "Male"
    },
    {
      ename: "Merry",
      country: "UK",
      Sal: 50000,
      gender: "Female"
    },
    {
      ename: "Sham",
      country: "India",
      Sal: 10000000,
      gender: "Male"
    },
    {
      ename: "Cherry",
      country: "Germany",
      Sal: 40000,
      gender: "Female"
    }
  ];
}

