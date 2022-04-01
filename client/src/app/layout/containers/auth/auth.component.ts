import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/auth/auth.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  errorMessage: string = '';
  authForm = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  authenticate(): void {
    const params = {
      email: this.authForm.get('email')?.value,
      password: this.authForm.get('password')?.value
    }
    this.authService.login(params).subscribe(
        (response) => {
          if (response.token) {
            const url = `${(response.isAdmin) ? '/admin' : ''}`;

            localStorage.setItem('token', response.token);
            console.log(response);
            this.authService.setData(response);
            this.router.navigate([url]);
          }
        },
        (err) => {
          if (err.status === 400) {
            this.errorMessage = 'Password must be at least 6 characters long!'
          } else if (err.status === 401) {
            this.errorMessage = err.error;
          }
        }
    );
  }

}
