import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html'
})

export class SearchBarComponent implements OnInit {

  videoForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private crudService: CrudService
  ) { 
    this.videoForm = this.formBuilder.group({
      url: [''],
    })
  }

  ngOnInit() { }

  onSubmit(): any {
    this.crudService.AddVideo(this.videoForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
      }, (err) => {
        console.log(err);
    });
  }

}
