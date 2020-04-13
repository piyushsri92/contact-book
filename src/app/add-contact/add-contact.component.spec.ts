import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactComponent } from './add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AddContactComponent', () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ AddContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
