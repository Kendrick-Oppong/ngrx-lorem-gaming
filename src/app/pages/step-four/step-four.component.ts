import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { step2Config, step3Config } from '@constants/form-config.constants';
import {
  StepThreeConfig,
  StepTwoConfig,
  STORAGE_KEY,
} from '@interface/form-data';
import { FormStorageService } from '@services/form-storage.service';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-step-four',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css'],
})
export class StepFourComponent {
  selectedPlan: StepTwoConfig | undefined;
  isYearly = false;
  selectedAddons: StepThreeConfig[] = [];
  showThankYou = false;

  constructor(
    private router: Router,
    private formStorageService: FormStorageService
  ) {}

  ngOnInit(): void {
    const step2Data = this.formStorageService.getItem(STORAGE_KEY.STEP2);
    const step3Data = this.formStorageService.getItem(STORAGE_KEY.STEP3);

    if (step2Data) {
      this.isYearly = step2Data.isYearly;
      this.selectedPlan = step2Config[step2Data.planId - 1];
    } else {
      this.selectedPlan = step2Config[0];
    }

    if (step3Data) {
      this.selectedAddons = step3Data.selectedAddons
        .map((addonId: number) =>
          step3Config.find((addon) => addon.id === addonId)
        )
        .filter(Boolean);
    }
  }

  getTotalCost(): string {
  
    if (
      !this.selectedPlan ||
      (!this.selectedPlan.yearly && !this.selectedPlan.monthly)
    ) {
      return '$0';
    }

    const planPrice = this.isYearly
      ? parseFloat(this.selectedPlan.yearly.replace('$', ''))
      : parseFloat(this.selectedPlan.monthly.replace('$', ''));

    const addonCost = this.selectedAddons.reduce((total, addon) => {
      const price = parseFloat(addon.price.replace('$', ''));
      return total + price;
    }, 0);

    return `$${planPrice + addonCost}${this.isYearly ? '/yr' : '/mo'}`;
  }

  changePlan(): void {
    this.router.navigate(['sign-up/step2']);
  }

  onConfirmClicked(showThankYou: boolean): void {
    this.showThankYou = showThankYou;
    this.formStorageService.clearStorage();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
