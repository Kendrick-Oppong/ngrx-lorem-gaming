import { Component, OnInit } from '@angular/core';
import { step2Config } from '@constants/form-config.constants';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '@components/button/button.component';
import { CommonModule } from '@angular/common';
import { FormStorageService } from '@services/form-storage.service';
import { STORAGE_KEY } from '@interface/form-data';

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
    this.formStorageService.setItem(STORAGE_KEY.STEP2, {
      planId: this.selectedPlanId ,
      isYearly: this.isYearly,
    });
  }

  ngOnInit(): void {
    const storedData = this.formStorageService.getItem(STORAGE_KEY.STEP2);
    if (storedData) {
      this.isYearly = storedData.isYearly;
      this.selectedPlanId = storedData.planId;
    }
  }
}
