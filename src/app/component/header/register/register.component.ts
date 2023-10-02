import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(fb: FormBuilder,
    private userService: UserService
    ) {
    this.initForm(fb)
   }

  ngOnInit(): void {
  }
  initForm(fb: any) {
    this.formGroup =fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.required),
      avatar: new FormControl('https://api.lorem.space/image/face?w=640&h=480&r=867')
    })
  }
  get form() {return this.formGroup.controls}
  onSignUp(){
    const user = this.formGroup.value;
    this.userService.createUser(user).subscribe((response: any)=>{
      console.log('response',response);
    })
    this.formGroup.reset();
  }
}
