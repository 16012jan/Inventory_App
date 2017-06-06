"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.selectedProduct = new core_1.EventEmitter();
    }
    ProductListComponent.prototype.onProductSelect = function (product) {
        this.currentProduct = product;
        this.selectedProduct.emit(product);
    };
    ProductListComponent.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    };
    return ProductListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductListComponent.prototype, "selectedProduct", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ProductListComponent.prototype, "products", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'products-list',
        templateUrl: 'products_list.template.html'
    }),
    __metadata("design:paramtypes", [])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=products_list.component.js.map