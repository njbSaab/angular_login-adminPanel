import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
  children: [
    {path: 'contacts', component: ContactsComponent},
    {path: 'contacts/user/:id', component: ContactsDetailsComponent},
    {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch: 'full'},
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
