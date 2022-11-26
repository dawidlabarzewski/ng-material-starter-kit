import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth-register',
  styleUrls: ['./auth-register.component.scss'],
  templateUrl: './auth-register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthRegisterComponent {
  readonly registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      city: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zipcode: new FormControl(),
      phone: new FormControl()
    });

  constructor(private _authService: AuthService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._authService.register(
      {
        email: registerForm.get('email')?.value,
        username: registerForm.get('username')?.value,
        password: registerForm.get('password')?.value,
        name: {
          firstname: registerForm.get('firstname')?.value,
          lastname: registerForm.get('lastname')?.value
        },
        address: {
          city: registerForm.get('city')?.value,
          street: registerForm.get('street')?.value,
          number: registerForm.get('number')?.value,
          zipcode: registerForm.get('zipcode')?.value
        },
        phone: registerForm.get('phone')?.value
      }
    ).subscribe();
  }
}
