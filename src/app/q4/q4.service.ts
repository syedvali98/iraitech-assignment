import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Q4Service {
  
  private value = new BehaviorSubject<any>("Enter value to display here");
  sharedValue = this.value.asObservable();

  constructor() { }

  updateValue(val){
    this.value.next(val)
  }
}
