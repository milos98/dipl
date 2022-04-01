import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { EmployeeModel } from "../models/employee.model";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/auth`;

  private user: EmployeeModel;

  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  setData(userData: EmployeeModel): void {
    this.user = userData;
  }

  isAdmin(): Observable<boolean> {
    const url = `${this.baseUrl}/admin`
    return this.http.get<boolean>(url);
  }

  login(params: { email: string, password: string }): Observable<EmployeeModel> {
    const url = `${this.baseUrl}/login`
    return this.http.post<EmployeeModel>(url, params);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

}
