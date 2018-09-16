import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit, OnDestroy {
  customers: { displayName: string }[];
  filteredCustomers: any[];

  customerSubscription: Subscription;

  constructor(private userService: UserService) {
    this.customerSubscription = this.userService.fetchAllCustomers()
        .subscribe(customers => this.filteredCustomers = this.customers = customers);
   }

   filter(query: string) {
     console.log(query);
     this.filteredCustomers = (query) ?
     this.filteredCustomers.filter(c => c.displayName.toLowerCase().includes(query.toLowerCase())) :
                                  this.customers;
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }

}
