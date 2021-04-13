import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loginForm',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  mail: string;
  motDePasse: string;
  formulaireOK: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  sendForm() {
    this.formulaireOK = true;
  }
}
