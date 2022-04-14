import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = this.fb.group({
    nome: ["", [
      Validators.required,
      Validators.minLength(4)
    ]],
    assunto: ["", [
      Validators.required,
      Validators.minLength(10)
    ]],
    telefone: ["", [
      Validators.required,
      Validators.minLength(11)
    ]],
    email: ["", [
      Validators.required,
      Validators.email
    ]],
    mensagem: ["", [
      Validators.required,
      Validators.minLength(20)
    ]]
  });

  constructor(private fb: FormBuilder) {}
}
