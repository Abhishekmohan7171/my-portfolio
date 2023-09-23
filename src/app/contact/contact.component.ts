import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    email: new FormControl('', { validators: Validators.required, nonNullable: true }),
    message: new FormControl('', { validators: Validators.required, nonNullable: true })
});

  async send(){
    emailjs.init('PTFb9nbUOyQBegdAK')
    let response = await emailjs.send("service_lbpi0ap","template_tu1kagh",{
      from_name: this.contactForm.value.name,
      to_name: "Admin",
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    });

    alert('Message sent successfully !')
    this.contactForm.reset();

    // console.log(this.contactForm.value.name,this.contactForm.value.email,this.contactForm.value.message)
  }

}


