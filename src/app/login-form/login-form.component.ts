import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loginForm',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  mail: string;
  motDePasse: string;

  constructor() {}

  sendForm() {
    alert("test")
  }
}
