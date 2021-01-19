import { Component, OnInit } from '@angular/core';
import { Q4Service } from '../q4.service';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {


  value = '';

  constructor(public q4: Q4Service) { }

  ngOnInit(): void {
    this.q4.sharedValue.subscribe(
      (a) => {
        this.value = a;
      }
    )
  }

}
