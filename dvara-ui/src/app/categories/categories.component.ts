import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getCategoriesList()
  }

  isLoader = false;
  categories = []
  subcategories =[]

  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    var selectedVal;
    selectedVal = event.target.value;
    var subCate;
    subCate = this.categories
    for(var i=0; i<subCate.length;i++){
      if(subCate[i].name == selectedVal){
        this.subcategories = subCate[i].subcategories;
      }
    }
    console.log(this.subcategories);

  }
  

  getCategoriesList() {
    this.isLoader = true;
    this.commonService.getListOfCategories().subscribe((data: any) => {
      this.isLoader = false;
      this.categories = data;
      console.log(data);
    },
      (err: HttpErrorResponse) => {
        this.isLoader = false;
        //this.toastr.error('Book Posting Failed..');

      });

  }
}
