import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { IUser } from '../shared/models/users.model';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  submitted = false;
  private subs = new Subscription();
  editMode: boolean;
  editFormData: IUser;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.buildForm();
    this.editMode = this.route.snapshot.params && this.route.snapshot.params.mode === 'edit';
    if (this.editMode) {
      this.editFormData = JSON.parse(this.route.snapshot.params.data);
      this.setEditForm(this.editFormData);
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phNumber: ['', [Validators.required, Validators.minLength(6)]],
      status: ['active', [Validators.required]]
    });
  }

  setEditForm(editFormData) {
    this.registerForm.patchValue(editFormData);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    if (this.editMode) {
      this.subs.add(
        this.apiService.getUser().pipe(take(1)).subscribe(r => {
          const pos = this.apiService.findPosition(r, this.editFormData);
          this.registerForm.value['id'] = this.editFormData.id;
          r.splice(pos, 1, this.registerForm.value);
          this.apiService.setUser(r);
          this.router.navigate(['/']);
        }));
    } else {
      this.subs.add(
        this.apiService.getUser().pipe(take(1)).subscribe(r => {
          const uid = Date.now();
          this.registerForm.value['id'] = uid;
          r.push(this.registerForm.value);
          this.apiService.setUser(r);
          this.router.navigate(['/']);
        }));
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }

}
