import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { formActions, localStorageActions } from './form.actions';
import { FormStorageConfig } from '@interface/form-data';

interface State {
  confirm: boolean;
  formFields: {
    stepOne: {
      name: string;
      emailAddress: string;
      phoneNumber: string;
    };
    stepTwo: {
      isYearly: boolean;
      selectedPlanId: number;
    };
    stepThree: {
      addons: number[];
    };
  };
}

const initialState: State = {
  confirm: false,
  formFields: {
    stepOne: {
      name: '',
      emailAddress: '',
      phoneNumber: '',
    },
    stepTwo: {
      isYearly: false,
      selectedPlanId: 1,
    },
    stepThree: {
      addons: [],
    },
  },
};

export const formsFeature = createFeature({
  name: 'form',
  reducer: createReducer(
    initialState,
    on(formActions.showThankYou, (state) => ({
      ...state,
      confirm: true,
    })),
    on(formActions.stepOne, (state, { stepPayload }) => ({
      ...state,
      formFields: {
        ...state.formFields,
        stepOne: { ...state.formFields.stepOne, ...stepPayload },
      },
      confirm: false,
    })),
    on(formActions.stepTwo, (state, { stepPayload }) => ({
      ...state,
      formFields: {
        ...state.formFields,
        stepTwo: { ...state.formFields.stepTwo, ...stepPayload },
      },
      confirm: false,
    })),
    on(formActions.stepThree, (state, { stepPayload }) => ({
      ...state,
      formFields: {
        ...state.formFields,
        stepThree: { ...state.formFields.stepThree, ...stepPayload },
      },
      confirm: false,
    }))
  ),
});

const initialStorageState: { [key: string]: FormStorageConfig } = {};

export const localStorageFeature = createFeature({
  name: 'localStorage',
  reducer: createReducer(
    initialStorageState,
    on(localStorageActions.setItem, (state, { key, value }) => {
      localStorage.setItem(key, JSON.stringify(value));
      return { ...state, [key]: value };
    }),
    on(localStorageActions.getItem, (state, { key }) => {
      const storedData = localStorage.getItem(key);
      return { ...state, [key]: storedData ? JSON.parse(storedData) : null };
    }),
    on(localStorageActions.removeItem, (state, { key }) => {
      localStorage.removeItem(key);
      const newState = { ...state };
      delete newState[key];
      return newState;
    }),
    on(localStorageActions.clearStorage, () => {
      localStorage.clear();
      return initialStorageState;
    })
  ),
});
export const { name, reducer, selectConfirm } = formsFeature;

export const {
  name: storageName,
  reducer: storageReducer,
  selectLocalStorageState,
} = localStorageFeature;
