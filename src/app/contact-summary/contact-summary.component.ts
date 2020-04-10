import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../shared/models/users.model';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact-summary',
  templateUrl: './contact-summary.component.html',
  styleUrls: ['./contact-summary.component.scss']
})
export class ContactSummaryComponent implements OnInit {

  private subs = new Subscription();
  userData$: Observable<IUser[]>;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.userData$ = this.apiService.getUser();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  editRecord(record) {
    const item = { 'data': JSON.stringify(record), 'mode': 'edit' };
    this.router.navigate(['/add-contact', item]);
  }

  deleteRecord(record) {
    this.subs.add(
      this.apiService.getUser().pipe(take(1)).subscribe(r => {
        const pos = this.apiService.findPosition(r, record);
        r.splice(pos, 1);
        this.apiService.setUser(r);
      }));
  }

}
