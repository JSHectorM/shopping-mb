import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";
import {faGoogle, faFacebook, faApple} from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../../services/auth.service";
import {RequestLogin, UserLoginModel} from "../../models/login-user.model";
import {Observable} from "rxjs";

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

  // img routes
  imgWebLogin ='/assets/img/loing-img-1.png'

  // flag show pssw
  showPassw = false;
  formLogin !: FormGroup;
  submited = false;


  constructor(private fb: FormBuilder,
              private auth: AuthService){}

  ngOnInit() {
    this.formLoginInit()
  }

  get fl(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  formLoginInit(){
    this.formLogin = this.fb.group({
      user: ['hector@mb.company', [Validators.required]],
      pssw: ['123', [Validators.required]],
      remember : ['true',[]]
    })
  }


  login(){
    this.submited = true;
    if ( this.formLogin.valid ){
      const userLogin : UserLoginModel = {
        username: this.formLogin.value.user,
        password: this.formLogin.value.pssw
      }
      console.log(userLogin)
      this.auth.login( userLogin ).subscribe({
        error : ( err ) => {
          console.error(err)
        },
        next : (data) => {
          this.auth.setToken( data.token ?? "" )
        }
      });
    }

  }

  changeShowPssw(){
    this.showPassw = !this.showPassw;

  }
}
