import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactSummaryComponent } from './contact-summary/contact-summary.component';


const routes: Routes = [{
  path: '',
  component: ContactSummaryComponent
},
{
  path: 'add-contact',
  loadChildren: () => import('./add-contact/add-contact.module').then(m => m.AddContactModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
