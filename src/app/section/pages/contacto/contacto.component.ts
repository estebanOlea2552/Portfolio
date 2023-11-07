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

  constructor(private formBulider: FormBuilder, private http: HttpClient){
    this.contactForm = this.formBulider.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  };

  submit(){
    let formData: any = new FormData();
    formData.append("name", this.contactForm.get("name")?.value);
    formData.append("email", this.contactForm.get("email")?.value);
    formData.append("message", this.contactForm.get("message")?.value);
    this.http.post("https://script.google.com/macros/s/AKfycbzuikVXRZo65PDtucSYcgLbnlUKBHG-pckDTJhfPd86-q-scKS6YidPO5ymAPXIM_asCA/exec", formData).subscribe(
      (response) => {
        console.log(response)
      }
    )
    formData.forEach((value: any, key: any) => {
      console.log(`${key}: ${value}`);
    });
  }
}
