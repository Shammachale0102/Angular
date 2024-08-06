import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BCompComponent {
  tempMsg:any
  tempCourse:any
  tempuser:any
 constructor(private service:DataserviceService){

 }
 ngOnInit(){
   this.tempMsg = this.service.getData()
   this.tempCourse = this.service.course
   this.tempuser = this.service.user
 }
}
