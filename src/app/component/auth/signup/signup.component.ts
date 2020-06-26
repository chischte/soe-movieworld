import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
    console.log('Value ' + form.value.email + ' value2 ' + form.value.password);
  }

}
