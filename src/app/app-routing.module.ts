import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';
import { CheckboxCategoryListComponent } from './components/checkbox-category-list/checkbox-category-list.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
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
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { AuthLoginComponentModule } from './components/auth-login/auth-login.component-module';
import { AuthServiceModule } from './services/auth.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: PublicHolidayListComponent }, { path: 'checkbox-categories', component: CheckboxCategoryListComponent }, { path: 'categories-menu', component: CategoryMenuComponent }, { path: 'product-search', component: ProductSearchComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: AuthLoginComponent }]), ProductListComponentModule, ProductServiceModule, CategoryListComponentModule, CategoryServiceModule, CryptoListComponentModule, CryptoServiceModule, PublicHolidayListComponentModule, PublicHolidayServiceModule, CheckboxCategoryListComponentModule, CategoryMenuComponentModule, ProductSearchComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, AuthLoginComponentModule, AuthServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
