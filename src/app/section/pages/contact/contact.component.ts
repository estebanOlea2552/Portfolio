import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: []
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  responseMessage: String = "";

  constructor(private formBulider: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBulider.group(
      {
        name: ['', Validators.required],
        issue: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required],
      }
    );
  };

  submit() {
    if (this.contactForm.status == "VALID") {
      let formData: any = new FormData();
      formData.append("name", this.contactForm.get("name")?.value);
      formData.append("email", this.contactForm.get("email")?.value);
      formData.append("message", this.contactForm.get("message")?.value);
      this.contactForm.reset();
      this.contactForm.disable();
      this.loading = true;
      
      this.http.post("https://script.google.com/macros/s/AKfycbzuikVXRZo65PDtucSYcgLbnlUKBHG-pckDTJhfPd86-q-scKS6YidPO5ymAPXIM_asCA/exec", formData)
        .pipe(
          catchError((error) => {
            this.loading = false;
            this.responseMessage = "Ups! Hubo un error al enviar el mensaje, por favor, verifique que los campos se hayan llenado correctamente e intentelo de nuevo :)";
            this.contactForm.enable();
            this.submitted = true;
            console.log(error);
            throw error;
          })
        )
        .subscribe((response) => {
          if (response) {
            this.loading = false;
            this.responseMessage = "Gracias por su mensaje! :)";
          } else {
            this.responseMessage = "Ups! Hubo un error al enviar el mensaje, por favor, verifique que los campos se hayan llenado correctamente e intentelo de nuevo :)";
          };
          this.contactForm.enable();
          this.submitted = true;
        });
    }
  }
}
