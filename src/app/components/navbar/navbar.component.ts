import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<any>;

  constructor(private userService: UserService) {
    this.userService.isAuthenticated.subscribe(authState => {
      if (authState) {
          this.user$ = this.userService.currentUser;
      }
    });
  }

  logout() {
      this.userService.purgeAuth();
      this.user$ = null;
  }

  ngOnInit() {
  }

}
