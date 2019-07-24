import { Component, OnInit } from '@angular/core';
import { MatSpinner } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin = () => {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigateByUrl('/home');
    }else {
      alert("Invalid credentials");
    }
  }

  onRegister = () => {
    // if(this.username == 'admin' && this.password == 'admin'){
    //  this.router.navigate(['home'])
    // }else {
    //   alert("Invalid credentials");
    // }
  }

}
