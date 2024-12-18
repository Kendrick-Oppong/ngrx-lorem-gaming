import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormStorageConfig, STORAGE_KEY } from '@interface/form-data';
import { localStorageActions } from 'app/store/form/form.actions';

@Injectable({
  providedIn: 'root',
})
export class FormStorageService {
  constructor(private store: Store) {}

  setItem(key: STORAGE_KEY, value: FormStorageConfig): void {
    this.store.dispatch(localStorageActions.setItem({ key, value }));
  }

  getItem(key: STORAGE_KEY) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  removeItem(key: STORAGE_KEY): void {
    this.store.dispatch(localStorageActions.removeItem({ key }));
  }

  clearStorage(): void {
    this.store.dispatch(localStorageActions.clearStorage());
  }
}
