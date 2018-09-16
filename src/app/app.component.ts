import { Component, OnInit } from '@angular/core';

import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng6-customers';


  constructor(private jwtService: JwtService,
              private userService: UserService, private router: Router) {
                this.userService.currentUser.subscribe(user => {
                  if (user) {
                    const returnUrl = localStorage.getItem('returnUrl');
                    this.router.navigateByUrl(returnUrl);
                  }
                });
              }


  ngOnInit() {
    this.jwtService.destroyToken();
  }

}
