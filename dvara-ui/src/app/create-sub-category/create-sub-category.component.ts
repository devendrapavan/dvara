import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service'
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Team } from './create-sub-category.model';
import { allResolved } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {

  isLoader = false;
  categories = []
  team: Team = new Team();
  uploadForm: FormGroup;

  constructor(private commonService: CommonService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.getNamesCategoriesList()
    this.uploadForm = this.formBuilder.group({
      name: '',
      category: '',
    });
  }

  getNamesCategoriesList() {
    this.isLoader = true;
    this.commonService.getNamesOfCategories().subscribe((data: any) => {
      this.isLoader = false;
      this.categories = data;
      console.log(data);
    },
      (err: HttpErrorResponse) => {
        this.isLoader = false;

      });

  }

  createTeam(form: NgForm) {
    this.uploadForm.get('name').setValue(this.team.name)
    this.uploadForm.get('category').setValue(this.team.category)
    console.log(this.uploadForm)

    this.commonService.saveSubCategory(this.team).subscribe((data: any) => {
      this.isLoader = false;
      console.log(data);
      alert("Subcategory have added successfully..")
      this.router.navigate([''])

    },
      (err: HttpErrorResponse) => {
        this.isLoader = false;
      });
  }

}
