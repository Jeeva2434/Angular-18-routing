import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private fb:FormBuilder = inject(FormBuilder);
  private route = inject(Router);
  private authService = inject(AuthService);
  
  loginForm!:FormGroup;

  ngOnInit(){
    this.loginForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(4)]],
      userRole: [null, Validators.required]
    })  
  }

  login(){
    console.log(this.loginForm.value);
    sessionStorage.setItem('loginUserDetail',JSON.stringify(this.loginForm.value));
    this.authService.authenticateUser(this.loginForm.value)
    this.route.navigate(['/']);
  }


}
