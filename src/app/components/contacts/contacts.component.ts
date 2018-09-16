import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  customers: any[] = [];
  filteredCustomers: any[] = [];
  categories;

  category = '';

  constructor(private userService: UserService,
              private categoryService: CategoryService,
              private route: ActivatedRoute) {

    this.categories = this.categoryService.fetchAllCategories();
  }

  ngOnInit() {
    this.userService.fetchAllCustomers().subscribe(customers => {
      this.filteredCustomers = this.customers = customers;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        if (this.category === 'ALL') {
          this.filteredCustomers = this.customers;
        } else {
        this.filteredCustomers = (this.category) ?
            this.customers.filter(c => c.contactType === this.category) : this.customers;
        }
  });
    });
  }

}
