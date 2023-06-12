import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  private fb = inject(FormBuilder);

  public myForm = this.fb.group({
    name:['',[Validators.minLength(2),Validators.required]],
    email:['',[Validators.required]],
    subject:['',[Validators.required]],
    menssage:['',[Validators.required]]
  })


  submitForm(){
    console.log('hola');
  }
}
