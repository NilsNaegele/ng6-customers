import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.css']
})
export class ContactsFilterComponent implements OnInit {
  @Input() category;
  categories;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.fetchAllCategories();
  }

}
