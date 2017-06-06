import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products_list/products_list.component';
import { ProductRowComponent } from "./product_row/product_row";
import { ProductImageComponent } from "./product_row/product_image/product_image.component";
import { ProductPriceComponent } from "./product_row/product_price/product_price.component";
import { ProductDepartmentComponent } from "./product_row/product_department/product_department.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductRowComponent,
        ProductImageComponent,
        ProductPriceComponent,
        ProductDepartmentComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
