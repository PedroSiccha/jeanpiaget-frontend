import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post(url, { email, password });
  }

}
