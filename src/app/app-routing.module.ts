import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactsComponent } from './contacts/contacts.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contact', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
