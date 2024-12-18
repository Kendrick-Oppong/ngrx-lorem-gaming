import { step2Config, step3Config } from '@constants/form-config.constants';

export type StepTwoConfig = (typeof step2Config)[number];
export type StepThreeConfig = (typeof step3Config)[number];

export interface StepOnePayload {
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

export interface StepTwoPayload {
  isYearly: boolean;
  planId: number;
}

export interface StepThreePayload {
  addons?: number[];
  selectedAddons?: number[];
}

export type FormStorageConfig =
  | StepOnePayload
  | StepTwoPayload
  | StepThreePayload;

export enum STORAGE_KEY {
  STEP1 = 'step1',
  STEP2 = 'step2',
  STEP3 = 'step3',
}
