import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSummaryComponent } from './contact-summary.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ContactSummaryComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ContactSummaryModule { }
