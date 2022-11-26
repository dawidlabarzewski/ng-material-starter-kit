import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PostcodeDetailComponent } from './postcode-detail.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [PostcodeDetailComponent],
  providers: [],
  exports: [PostcodeDetailComponent]
})
export class PostcodeDetailComponentModule {
}
