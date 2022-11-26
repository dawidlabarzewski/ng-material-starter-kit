import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidayModel } from '../../models/public-holiday.model';
import { PublicHolidayService } from '../../services/public-holiday.service';

@Component({
  selector: 'app-public-holiday-list',
  styleUrls: ['./public-holiday-list.component.scss'],
  templateUrl: './public-holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidayListComponent {
  readonly list$: Observable<PublicHolidayModel[]> = this._publicHolidayService.getAll();

  constructor(private _publicHolidayService: PublicHolidayService) {
  }
}
