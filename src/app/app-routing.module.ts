import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';
import { CheckboxCategoryListComponent } from './components/checkbox-category-list/checkbox-category-list.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidayListComponentModule } from './components/public-holiday-list/public-holiday-list.component-module';
import { PublicHolidayServiceModule } from './services/public-holiday.service-module';
import { CheckboxCategoryListComponentModule } from './components/checkbox-category-list/checkbox-category-list.component-module';
import { CategoryMenuComponentModule } from './components/category-menu/category-menu.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: PublicHolidayListComponent }, { path: 'checkbox-categories', component: CheckboxCategoryListComponent }, { path: 'categories-menu', component: CategoryMenuComponent }]), ProductListComponentModule, ProductServiceModule, CategoryListComponentModule, CategoryServiceModule, CryptoListComponentModule, CryptoServiceModule, PublicHolidayListComponentModule, PublicHolidayServiceModule, CheckboxCategoryListComponentModule, CategoryMenuComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
