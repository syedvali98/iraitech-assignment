import { Component, OnInit } from '@angular/core';
import { Q4Service } from './q4.service';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit {

  constructor(public q4: Q4Service) { }

  onChange(e) {
    this.q4.updateValue(e.target.value);
  }

  ngOnInit(): void {
  }

}
