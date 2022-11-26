import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartDetailComponent } from './cart-detail.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CartDetailComponent],
  providers: [],
  exports: [CartDetailComponent]
})
export class CartDetailComponentModule {
}
