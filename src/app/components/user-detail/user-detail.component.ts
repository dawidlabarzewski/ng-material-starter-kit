import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import {UserModel} from "../../models/user/user.model";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {
  readonly userDetails$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getOne(data['id']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) {
  }
}
