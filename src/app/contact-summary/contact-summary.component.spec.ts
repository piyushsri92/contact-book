import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSummaryComponent } from './contact-summary.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactSummaryComponent', () => {
  let component: ContactSummaryComponent;
  let fixture: ComponentFixture<ContactSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, HttpClientModule, RouterTestingModule],
      declarations: [ ContactSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
