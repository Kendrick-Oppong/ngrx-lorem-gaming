import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from '@pages/step-two/step-two.component';
import { StepThreeComponent } from '@pages/step-three/step-three.component';
import { StepFourComponent } from '@pages/step-four/step-four.component';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Lorem Gaming',
  },
  {
    path: 'sign-up',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      {
        path: 'step1',
        component: StepOneComponent,
        title: 'Step 1 - YOUR INFO',
      },
      {
        path: 'step2',
        component: StepTwoComponent,
        title: 'Step 2 - SELECT PLAN',
      },
      {
        path: 'step3',
        component: StepThreeComponent,
        title: 'Step 3 - ADD-ONS',
      },
      {
        path: 'step4',
        component: StepFourComponent,
        title: 'Step 4 - SUMMARY',
      },
    ],
  },
];
