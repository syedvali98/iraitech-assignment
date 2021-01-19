import { Component, OnInit } from '@angular/core';
import { Q4Service } from '../q4.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

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
