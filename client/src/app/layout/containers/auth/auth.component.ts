import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/auth/auth.service";
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  errorMessage: string = '';
  authForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  get email() { return this.authForm.get('email'); };

  get password() { return this.authForm.get('password'); };

  authenticate(): void {
    const params = {
      email: this.email?.value,
      password: this.password?.value
    }

    this.authService.login(params).subscribe(
        (response) => {
          if (response.token) {
            const url = `${(response.isAdmin) ? '/admin' : ''}`;

            localStorage.setItem('token', response.token);
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
