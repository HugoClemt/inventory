import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from './interface/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Data[] = [];
  dataSubject: BehaviorSubject<Data[]> = new BehaviorSubject(this.data);

  constructor() {
    this.loadDataFromLocalStorage();
   }

  addData(newData: Data): void {
    this.data.push(newData);
    this.saveDataToLocalStorage();
    localStorage.setItem('savedData', JSON.stringify(this.data));
  }

  private saveDataToLocalStorage(): void {
    localStorage.setItem('savedData', JSON.stringify(this.data));
  }

  private loadDataFromLocalStorage(): void {
    const savedData = localStorage.getItem('savedData');
    if (savedData) {
      this.data = JSON.parse(savedData);
      this.dataSubject.next(this.data);
    }
  }

  updateData(newData: Data): void {
    this.data = { ...this.data, ...newData };
    this.dataSubject.next(this.data);
    localStorage.setItem('savedData', JSON.stringify(this.data));
  }
}
