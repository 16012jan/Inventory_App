import { Component } from '@angular/core';
import { Product } from "./models/product";



@Component({
    moduleId: module.id,
    selector: 'inventory-app-root',
    templateUrl: 'app.template.html'
})

export class AppComponent {
  products:Product[];
  constructor() {
    this.products = [
      new Product(
        'SHOES',
        'A Nice Black Hat',
        './app/assets/images/products/black-shoes.jpg',
        ['Man', 'Shoes', 'Running Shoes'],
        29.99
      ),
      new Product(
        'NEATJACKET',
        'Blue Jacket',
        './app/assets/images/products/blue-jacket.jpg',
        ['Woman', 'Apparel', 'Jackets'],
        29.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        './app/assets/images/products/black-hat.jpg',
        ['Man', 'Accessories', 'Hat'],
        29.99
      ),
    ]
  }

  selectedProduct(product:Product): void{
    console.log("Selected product:", product)

  }
}
