import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contact-book';

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.loadUsers().subscribe(d => {
      this.apiService.setUser(d);
    });
  }
}
