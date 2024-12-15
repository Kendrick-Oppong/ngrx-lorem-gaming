import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { step1Config } from '@constants/form-config.constants';
import { STORAGE_KEY } from '@interface/form-data';
import { FormStorageService } from '@services/form-storage.service';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css',
})
export class StepOneComponent implements OnInit {
  readonly forms = step1Config;

  constructor(
    private router: Router,
    private formStorageService: FormStorageService
  ) {}

  personalInfoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    const storedData = this.formStorageService.getItem(STORAGE_KEY.STEP1);
    if (storedData) {
      this.personalInfoForm.patchValue(storedData);
    }
  }

  // Method to check if a form control has an error
  hasError(controlName: string, errorType: string): boolean {
    const control = this.personalInfoForm.get(controlName);
    return control
      ? control.hasError(errorType) && (control.dirty || control.touched)
      : false;
  }

  onSubmit() {
    const step1Data = this.personalInfoForm.value;
    if (this.personalInfoForm.invalid) {
      this.personalInfoForm.markAllAsTouched();
    } else {
      this.formStorageService.setItem(STORAGE_KEY.STEP1, step1Data);
      this.router.navigate(['sign-up/step2']);
    }
  }
}
