import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { JwtService } from './../../services/jwt.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  email = '';
  password = '';
  errorMessage: string;

  constructor(private userService: UserService,
              private jwtService: JwtService,
              private router: Router) { }

  submit() {
    this.errorMessage = '';
    console.log(this.email);
    console.log(this.password);
    if (this.email !== '' && this.password !== '') {
      this.userService.attemptAuth('login', this.email, this.password).subscribe(
        (data) => {
          if (data) {
            this.router.navigateByUrl('contacts?category=ALL');
          }
        }
      );
    } else {
      this.errorMessage = 'Email and/or password are wrong. Try again';
      console.log(this.errorMessage);
      return;
    }
  }

  ngOnInit() {
    // this.jwtService.destroyToken(); reuncomment after authguard implementation
  }

}
