import { Component, OnInit } from '@angular/core';
import { Q4Service } from '../q4.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  value = '';

  constructor(public q4: Q4Service) { }

  ngOnInit(): void {
    this.q4.sharedValue.subscribe(
      (a)=>{
        this.value = a;
      }
    )
  }

}
