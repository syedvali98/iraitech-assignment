import { Component, OnInit } from '@angular/core';
import { Q4Service } from '../q4.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

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
