import { Injectable } from '@angular/core';
import { STORAGE_KEY } from '@interface/form-data';

@Injectable({
  providedIn: 'root',
})
export class FormStorageService {
  setItem(key: STORAGE_KEY, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: STORAGE_KEY) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
