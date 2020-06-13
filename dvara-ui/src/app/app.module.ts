import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule,FormBuilder } from '@angular/forms';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    CreateSubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
