import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';


@Component({
  selector: 'app-admin-customer-form',
  templateUrl: './admin-customer-form.component.html',
  styleUrls: ['./admin-customer-form.component.css']
})
export class AdminCustomerFormComponent implements OnInit {
  categories: string[] = [];

  constructor(private categoryService: CategoryService,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = this.categoryService.fetchAllCategories();
  }

  save(customerForm) {
    console.log('New Customer: ' + JSON.stringify(customerForm));
    // post this to rest api, create customer
    this.customerService.create(customerForm);
    this.router.navigate(['/admin/customers']);
  }

}
