import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product";


@Component({
  moduleId: module.id,
  selector: 'products-list',
  templateUrl: 'products_list.template.html'
})

export class ProductListComponent {
  @Output() selectedProduct: EventEmitter<Product> = new EventEmitter();
  @Input() products: Product[];
  currentProduct:Product;

  constructor(){
  }
  onProductSelect(product:Product) {
    this.currentProduct = product;
    this.selectedProduct.emit(product);
  }
  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct){
      return false
    }
    return product.sku === this.currentProduct.sku;
  }
}
