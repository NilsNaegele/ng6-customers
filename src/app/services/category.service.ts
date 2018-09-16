import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = ['COMPANY', 'PERSON', 'VISITOR'];

  constructor() { }

  fetchAllCategories(): string[] {
    // get this from rest api
    return this.categories;
  }
}
