import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControlName, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder)
  {
    
  }
 
  ngOnInit(){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  onSubmit(form: FormGroup)
  {
    console.log('valid?',form.valid);
    console.log('Name',form.value.name);
    console.log('Email',form.value.email);
    console.log('Message',form.value.message);
    
  }
 
}
