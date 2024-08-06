import { Component } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class ACompComponent {
  constructor(private service: DataserviceService) {
  }
  tempUser:any

  ngOnit() {
   this.tempUser = this.service.user;
  }
}
