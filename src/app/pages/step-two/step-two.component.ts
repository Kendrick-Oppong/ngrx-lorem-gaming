import { Component, inject, OnInit } from '@angular/core';
import { step2Config } from '@constants/form-config.constants';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormStorageService } from '@services/form-storage.service';
import { StepTwoPayload, STORAGE_KEY } from '@interface/form-data';
import { Store } from '@ngrx/store';
import { formActions } from 'app/store/form/form.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, CommonModule],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css',
})
export class StepTwoComponent implements OnInit {
  readonly plans = step2Config;
  isYearly = false;
  selectedPlanId = 1;

  private readonly store = inject(Store);

  constructor(private formStorageService: FormStorageService) {}

  onPlanToggle(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.isYearly = input.checked;
    this.saveToLocalStorage();
  }

  selectPlan(planId: number): void {
    this.selectedPlanId = planId;
    this.saveToLocalStorage();
  }

  saveToLocalStorage(): void {
    const payload = {
      planId: this.selectedPlanId,
      isYearly: this.isYearly,
    };
    this.formStorageService.setItem(STORAGE_KEY.STEP2, {
      planId: this.selectedPlanId,
      isYearly: this.isYearly,
    });
    this.store.dispatch(
      formActions.stepTwo({ stepPayload: payload as StepTwoPayload })
    );
  }

  ngOnInit(): void {
    const storedData = this.formStorageService.getItem(STORAGE_KEY.STEP2);
    if (storedData) {
      this.isYearly = storedData.isYearly;
      this.selectedPlanId = storedData.planId;
    }
  }
}
