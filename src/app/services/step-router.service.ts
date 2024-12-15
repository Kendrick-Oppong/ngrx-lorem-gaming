import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StepRouterService {
  private steps = [
    { path: 'sign-up/step1', index: 1 },
    { path: 'sign-up/step2', index: 2 },
    { path: 'sign-up/step3', index: 3 },
    { path: 'sign-up/step4', index: 4 },
  ];

  private getCurrentStepIndex(routeSnapshot: ActivatedRouteSnapshot): number {
    const currentPath = routeSnapshot.pathFromRoot
      .flatMap((snapshot) => snapshot.url.map((segment) => segment.path))
      .join('/');
    return this.steps.findIndex((step) => step.path === currentPath);
  }

  getPreviousStep(routeSnapshot: ActivatedRouteSnapshot): string | null {
    const currentIndex = this.getCurrentStepIndex(routeSnapshot);

    if (currentIndex > 0) {
      return '/' + this.steps[currentIndex - 1].path;
    }

    return null;
  }

  getNextStep(routeSnapshot: ActivatedRouteSnapshot): string | null {
    const currentIndex = this.getCurrentStepIndex(routeSnapshot);

    if (currentIndex < this.steps.length - 1) {
      return '/' + this.steps[currentIndex + 1].path;
    }

    return null;
  }
}
