import { Component, OnInit } from '@angular/core';
import { ServiceActivateService } from '../service-activate.service';

// Define a Product interface to match the service data structure
interface Product {
  pid: number;
  pname: string;
  price: number;
}

@Component({
  selector: 'app-activate-route-comp',
  templateUrl: './activate-route-comp.component.html',
  styleUrls: ['./activate-route-comp.component.css']
})
export class ActivateRouteCompComponent implements OnInit {

  productInfo: Product[] = []; // Use the Product interface and initialize with an empty array

  constructor(private service: ServiceActivateService) {}

  ngOnInit() {
    // Fetch the product data and assign it to productInfo
    this.productInfo = this.service.getAllproduct();
  }
}
