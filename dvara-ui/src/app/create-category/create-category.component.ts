import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Team } from './category.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private commonService:CommonService,private formBuilder: FormBuilder,private router: Router) { }
  isLoader = false;
  team:Team = new Team();
uploadForm: FormGroup; 
  ngOnInit() {
     this.uploadForm = this.formBuilder.group({
      name: ''
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.team = {
       name:""  
      };
    }
  }

  createTeam(form: NgForm){
    this.uploadForm.get('name').setValue(this.team.name)
    console.log(this.uploadForm)
    if(this.uploadForm.get('name')!=undefined){
      this.commonService.saveCategory(this.team).subscribe((data: any) => {
        this.isLoader = false;
        console.log(data);
        alert("Category have added successfully..")
        this.router.navigate([''])
    
      },
        (err: HttpErrorResponse) => {
          this.isLoader = false;
    
        });
    }


  }

}
