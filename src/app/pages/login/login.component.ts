import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";
import {faGoogle, faFacebook, faApple} from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // Icons
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faGoogle = faGoogle;
  faFacebook =  faFacebook;
  faApple =  faApple;
  faArrowLeft = faArrowLeft;

  // flag show pssw
  showPassw = false;
  formLogin !: FormGroup;
  submited = false;


  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formLoginInit()
  }

  get fl(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  formLoginInit(){
    this.formLogin = this.fb.group({
      user: ['', [Validators.required]],
      pssw: ['', [Validators.required]],
      remember : ['true',[]]
    })
  }


  login(){
    this.submited = true;
    console.log(this.formLogin.value)
  }

  changeShowPssw(){
    this.showPassw = !this.showPassw;

  }
}
