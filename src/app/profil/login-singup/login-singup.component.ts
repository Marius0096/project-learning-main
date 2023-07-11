import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrls: ['./login-singup.component.css']
})
export class LoginSingupComponent {
  newAccount = true
  // 
  submitButtonOption = "Sing up"
  toggleButtonOption = "Log in"
  textOption1 = ""
  textOption2 = "Already"
  // 
  @Input() logged: boolean = false;

  toggleLoginSingup(){
    this.newAccount = !this.newAccount;
    console.log(this.newAccount)
    this.newAccount? this.onSingupChanges(): this.onLoginChanges();
  }
  onLoginChanges(){ //newAccount = false
    this.toggleButtonOption = "Sing up"
    this.submitButtonOption = "Log in"
    this.textOption1 = "back"
    this.textOption2 = "Don't"
  }
  onSingupChanges(){ //newAccount = true
    this.submitButtonOption = "Sing up"
    this.toggleButtonOption = "Log in"
    this.textOption1 = ""
    this.textOption2 = "Already"
  }
  // 
  onSubmitForm(formRef: any){
    this.logged = true
    formRef.reset();
  }
}
