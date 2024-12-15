import { step2Config, step3Config } from '@constants/form-config.constants';

export type StepTwoConfig = (typeof step2Config)[number];
export type StepThreeConfig = (typeof step3Config)[number];

export enum STORAGE_KEY {
  STEP1 = 'step1',
  STEP2 = 'step2',
  STEP3 = 'step3',
}
