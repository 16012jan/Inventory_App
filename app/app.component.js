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
var product_1 = require("./models/product");
var AppComponent = (function () {
    function AppComponent() {
        this.products = [
            new product_1.Product('SHOES', 'A Nice Black Hat', './app/assets/images/products/black-shoes.jpg', ['Man', 'Shoes', 'Running Shoes'], 29.99),
            new product_1.Product('NEATJACKET', 'Blue Jacket', './app/assets/images/products/blue-jacket.jpg', ['Woman', 'Apparel', 'Jackets'], 29.99),
            new product_1.Product('NICEHAT', 'A Nice Black Hat', './app/assets/images/products/black-hat.jpg', ['Man', 'Accessories', 'Hat'], 29.99),
        ];
    }
    AppComponent.prototype.selectedProduct = function (product) {
        console.log("Selected product:", product);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'inventory-app-root',
        templateUrl: 'app.template.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map