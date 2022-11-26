import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  styleUrls: ['./auth-login.component.scss'],
  templateUrl: './auth-login.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent {
  readonly loginForm: FormGroup = new FormGroup({ username: new FormControl(), password: new FormControl() });

  constructor(private _authService: AuthService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._authService.login(
      {
        username: loginForm.get('username')?.value,
        password: loginForm.get('password')?.value
      }
    ).subscribe();
  }
}
