import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm!:FormGroup;

  constructor(private fb:FormBuilder)
  {

  }

  ngOnInit(): void 
  {
    this.myForm=this.fb.group({
      name : ('Vishal'),
      email :(''),
      message:('')
    });
  }

  onSubmit(data:FormGroup)
  {
    console.log(data.value);
  }



}
