import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from "../shared/auth/auth.service";
import { map } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivateChild() {
    return this.authService.isAdmin().pipe(map(
        (res) => {
          return true;
        },
        (err: HttpErrorResponse) => {
          this.router.navigate(['/']);
          return false;
        }
    ));
  }
}
