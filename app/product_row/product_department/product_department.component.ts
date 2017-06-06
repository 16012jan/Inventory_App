import { Component, Input   } from "@angular/core";
import { Product } from "../../models/product";

@Component({
  moduleId: module.id,
  selector: 'product-department',
  templateUrl: 'product_department.template.html'
})

export class ProductDepartmentComponent {
  @Input() product:Product;

}
