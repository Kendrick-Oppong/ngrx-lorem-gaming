import { Component } from '@angular/core';
import { step3Config } from '@constants/form-config.constants';
import { STORAGE_KEY } from '@interface/form-data';
import { FormStorageService } from '@services/form-storage.service';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.css',
})
export class StepThreeComponent {
  readonly addons = step3Config;
  selectedAddons: number[] = [];

  constructor(private formStorageService: FormStorageService) {}

  ngOnInit(): void {
    const storedData = this.formStorageService.getItem(STORAGE_KEY.STEP3);
    if (storedData) {
      this.selectedAddons = storedData.selectedAddons || [];
    }
  }

  toggleAddon(addonId: number): void {
    if (this.selectedAddons.includes(addonId)) {
      this.selectedAddons = this.selectedAddons.filter((id) => id !== addonId);
    } else {
      this.selectedAddons.push(addonId);
    }
    this.saveData();
  }

  saveData(): void {
    this.formStorageService.setItem(STORAGE_KEY.STEP3, {
      selectedAddons: this.selectedAddons,
    });
  }
}
