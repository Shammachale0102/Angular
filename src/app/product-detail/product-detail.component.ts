import { Component } from '@angular/core';
import { ServiceActivateService } from '../service-activate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private service: ServiceActivateService, public activateroute:ActivatedRoute) { }
  newid: any
  product: any
  ngOnInit() {
    this.activateroute.paramMap.subscribe((params) => {
      this.newid = params.get('id')
      this.product = this.service.getproductById(this.newid)
    })
  }
}

