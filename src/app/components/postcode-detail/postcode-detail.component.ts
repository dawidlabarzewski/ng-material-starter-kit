import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostCodeService } from '../../services/post-code.service';
import {PostCodeDetailsModel} from "../../models/post-code-details.model";

@Component({
  selector: 'app-postcode-detail',
  templateUrl: './postcode-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostcodeDetailComponent {
  readonly params$: Observable<PostCodeDetailsModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._postCodeService.getOne(data['country'], data['postcode']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _postCodeService: PostCodeService) {
  }
}
