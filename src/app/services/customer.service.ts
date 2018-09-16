import { Injectable } from '@angular/core';

import { JwtService } from './jwt.service';
import { ApiService } from './api.service';

import { Customer } from '../models/customer';

import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private jwtService: JwtService, private apiService: ApiService) { }


  create(newCustomer) {
    // this.apiService.post('contacts', newCustomer);
    return true;
  }
}
