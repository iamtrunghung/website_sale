import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    fb: FormBuilder,
    private userService: UserService
  ) { 
    this.initForm(fb)
  }

  ngOnInit(): void {
  }
  initForm(fb: any) {
    this.loginForm = fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.required)
    })
  }
  get form() {return this.loginForm.controls}
  login(){
    const user = this.loginForm.value;
    this.userService.checkLogin(user);
  }
}
