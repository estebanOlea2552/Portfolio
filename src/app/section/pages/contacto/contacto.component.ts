import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{

   contactForm: FormGroup;
   submitted: boolean = false;
   loading: boolean = false;
   responseMessage: String = "";

  constructor(private formBulider: FormBuilder, private http: HttpClient){
    this.contactForm = this.formBulider.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  };

  submit(){

    if(this.contactForm.status == "VALID"){

    let formResponse: any;
    let formData: any = new FormData();
    formData.append("name", this.contactForm.get("name")?.value);
    formData.append("email", this.contactForm.get("email")?.value);
    formData.append("message", this.contactForm.get("message")?.value);
    this.loading = true;
    this.http.post("https://script.google.com/macros/s/AKfycbzuikVXRZo65PDtucSYcgLbnlUKBHG-pckDTJhfPd86-q-scKS6YidPO5ymAPXIM_asCA/exec", formData).subscribe(
      response => {
        if(response){
          this.loading = false;
          this.responseMessage = "Mensaje enviado!";
        }else{
          this.responseMessage = "Ups! Hubo un error al enviar el mensaje, por favor, verifique que los campos se hayan llenado correctamente e intentelo de nuevo :)";
        };
        this.contactForm.enable();
        this.submitted = true;
        console.log(response);
      },
      (error) => {
        this.loading = false;
        this.responseMessage = "Ups! Hubo un error al enviar el mensaje, por favor, verifique que los campos se hayan llenado correctamente e intentelo de nuevo :)";
        this.contactForm.enable();
        this.submitted = true; 
        console.log(error);
      }
    )
    
    formData.forEach((value: any, key: any) => {
      console.log(key, value);
    });

    }
  }
}
