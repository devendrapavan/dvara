import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';

const routes: Routes = [
  {
    path: '',component: CategoriesComponent
  },
  {
    path: 'create-category', component: CreateCategoryComponent
  },
  {
    path: 'create-sub-category', component: CreateSubCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
