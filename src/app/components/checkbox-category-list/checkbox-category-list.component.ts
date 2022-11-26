import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-checkbox-category-list',
  styleUrls: ['./checkbox-category-list.component.scss'],
  templateUrl: './checkbox-category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoryListComponent {
  readonly list$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}
