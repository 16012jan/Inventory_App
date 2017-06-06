import { Component, Input, HostBinding } from "@angular/core";
import { Product } from "../models/product";


@Component({
  moduleId: module.id,
  selector: 'product-row',
  templateUrl: 'product_row.template.html'
})
export class ProductRowComponent {
  @Input() product:Product;
   isSelected(product:Product){

   }
  @HostBinding('attr.class')cssClass = 'item';
}
