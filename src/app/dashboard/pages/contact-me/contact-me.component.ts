import { AfterViewInit, Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ErrorMessage, FormResponse } from '../../interfaces';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.isImgLoaded = true;
  }
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  public  isImgLoaded:boolean = false;
  public  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  public  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';


  public myForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.fullNamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]],
    subject:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),this.emptyField()]],
    message:['',[Validators.required]]
  })


  submitForm(){
    this.myForm.markAllAsTouched();
    if(this.myForm.invalid) return;
    this.http.post<FormResponse>('https://formspree.io/f/mqkordee',this.myForm.value)
    .pipe(
      map(resp =>{
        const {next, ok} = resp;
      if(ok){
        const text = 'Your message has been sent succesfully, I will contact you soon.Thanks!'
        this.formSubmitAlert(text, 'success', 3000);
        // this block of code solve the angular material problem that it shows all the fields in red color after the form reset
        this.myForm.reset();
        Object.keys(this.myForm.controls).forEach(key => {
          this.myForm.get(key)!.setErrors(null) ;
        });
        return;
      }
    }),
    catchError(err=>{
      this.formSubmitAlert('Something goes wrong!<br>Please try later.', 'error', 3000);
      return of(err)
    })
    ).subscribe()
  }

  isValidField(field:string){
    return this.myForm.get(field)?.touched &&
    this.myForm.get(field)?.errors;
  }

  showError(field: string):string | null{
    if (!this.myForm.contains(field)) return null;
    const errors = this.myForm.get(field)!.errors || {};

    const errorMessages:ErrorMessage = {
      required: 'This field is required',
      minlength:`Minimun lenght accepted ${errors['minlength']?.requiredLength}`,
      min:`Minimun value accepted ${errors['min']?.min}`,
      pattern:'Invalid format',
      emptyField:'The field must contain characters'
    }

    for (const key of Object.keys(errors)) {
        return errorMessages[key as keyof ErrorMessage];
    }
    return null;
  }

  emptyField():ValidatorFn{

    return (control:AbstractControl)=>{
      if(!control.value)return null;
     return (control.value.trim().length === 0)? {emptyField:true} : null;
    }
  }


  formSubmitAlert(text:string, icon:SweetAlertIcon, timer:number){
    Swal.fire({
      position: 'center',
      icon,
      title: text,
      showConfirmButton: false,
      timer
    })
  }

}
