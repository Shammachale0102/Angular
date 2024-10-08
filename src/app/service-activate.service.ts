import { Injectable } from '@angular/core';

// Define an interface for the product
interface Product {
  pid: number;
  pname: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceActivateService {
  private products: Product[]; // Use the Product interface

  constructor() { 
    this.products = [
      { pid: 121, pname: 'Mouse', price: 300 },
      { pid: 345, pname: 'Keyboard',price: 400 },
      { pid: 456, pname: 'Mobile', price: 500 },
      { pid: 789, pname: 'Laptop', price: 600 },
    ];
  }

  getAllproduct(){
    return this.products;
  }

  getproductById(id: any){
    return this.products.find((p: any) => p.pid === id) 
  }
}
 