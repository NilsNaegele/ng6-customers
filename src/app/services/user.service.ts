import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JwtService } from './jwt.service';
import { ApiService } from './api.service';

import { Customer } from '../models/customer';

import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject = new BehaviorSubject<any>(new Customer());
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private jwtService: JwtService,
              private apiService: ApiService,
              private route: ActivatedRoute) { }

  private setAuth(user: any) {
    console.log(user.token.authToken);
    this.jwtService.saveToken(user.token.authToken);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  public purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(new Customer());
    this.isAuthenticatedSubject.next(false);
  }

  public getCurrentUser(): Customer {
    return this.currentUserSubject.value;
  }

  public attemptAuth(type: string, email: string, password: string): Observable<any> {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      window.localStorage.setItem('returnUrl', returnUrl);
      const credentials = {
        username: email,
        password: password
      };
          return this.apiService.post(type, credentials).pipe(
            map((user) => {
              this.setAuth(user);
              return user;
            }
          ));
  }

  public fetchAllCustomers(): Observable<any> {
    return this.apiService.get('contacts').pipe(
      map((customers) => {
        console.log(customers);
        return customers.data;
      })
    );
  }

  public fetchCustomer(id: string): Observable<any[]> {
    return this.apiService.get(`contacts/${id}`).pipe(map((customer) => [customer]));
  }
}
