import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  FormStorageConfig,
  StepOnePayload,
  StepThreePayload,
  StepTwoPayload,
  STORAGE_KEY,
} from '@interface/form-data';

export const formActions = createActionGroup({
  source: 'Steps Pages',
  events: {
    ShowThankYou: emptyProps(),
    stepOne: props<{ stepPayload: StepOnePayload }>(),
    stepTwo: props<{ stepPayload: StepTwoPayload }>(),
    stepThree: props<{ stepPayload: StepThreePayload }>(),
  },
});

export const localStorageActions = createActionGroup({
  source: 'LocalStorage actions',
  events: {
    setItem: props<{ key: STORAGE_KEY; value: FormStorageConfig }>(),
    getItem: props<{ key: STORAGE_KEY }>(),
    removeItem: props<{ key: STORAGE_KEY }>(),
    clearStorage: emptyProps(),
  },
});
