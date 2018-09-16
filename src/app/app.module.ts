import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ListsComponent } from './components/lists/lists.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { DealsComponent } from './components/deals/deals.component';
import { CampaignPageComponent } from './components/campaign-page/campaign-page.component';
import { CampaignSuccessComponent } from './components/campaign-success/campaign-success.component';
import { AdminCustomersComponent } from './components/admin-customers/admin-customers.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { FooterComponent } from './components/footer/footer.component';

import { AuthGuard } from './services/auth-guard.service';
import { AdminCustomerFormComponent } from './components/admin-customer-form/admin-customer-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactsFilterComponent } from './components/contacts/contacts-filter/contacts-filter.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NavbarComponent,
    ContactsComponent,
    CustomersComponent,
    ListsComponent,
    ToDosComponent,
    CampaignsComponent,
    DealsComponent,
    CampaignPageComponent,
    CampaignSuccessComponent,
    AdminCustomersComponent,
    AdminOrdersComponent,
    FooterComponent,
    AdminCustomerFormComponent,
    ContactDetailsComponent,
    ContactsFilterComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: AuthenticationComponent },
      { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
      { path: 'contact/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
      { path: 'campaigns', component: CampaignsComponent, canActivate: [AuthGuard] },
      { path: 'campaigns-out', component: CampaignPageComponent, canActivate: [AuthGuard] },
      { path: 'campaign-success', component: CampaignSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/to-dos', component: ToDosComponent, canActivate: [AuthGuard] },
      { path: 'admin/customers-new', component: AdminCustomerFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/customers/:id', component: AdminCustomerFormComponent, canActivate: [AuthGuard] },
      { path: 'admin/customers', component: AdminCustomersComponent, canActivate: [AuthGuard] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
