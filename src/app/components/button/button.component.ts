import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepRouterService } from '@services/step-router.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { formActions } from 'app/store/form/form.actions';
import { FormStorageService } from '@services/form-storage.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  previousRoute: string | null = null;
  nextRoute: string | null = null;

  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute,
    private formStorageService: FormStorageService,
    private stepRouterService: StepRouterService
  ) {
    this.previousRoute = this.stepRouterService.getPreviousStep(
      this.route.snapshot
    );
    this.nextRoute = this.stepRouterService.getNextStep(this.route.snapshot);
  }

  goBack() {
    if (this.previousRoute) {
      this.router.navigate([this.previousRoute]);
    }
  }

  nextStep() {
    if (this.nextRoute) {
      this.router.navigate([this.nextRoute]);
    } else {
      this.store.dispatch(formActions.showThankYou());
      this.formStorageService.clearStorage();
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    }
  }
}
