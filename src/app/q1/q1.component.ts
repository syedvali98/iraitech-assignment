import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {

  values = [2, 3, 10, 15, 26, 35, 50, 63, 82];
  inputValue = 0;
  outputValue = 0

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    if (this.inputValue % 2 === 0 && this.inputValue) {
      console.log((this.inputValue * this.inputValue) - 1)
      this.outputValue = (this.inputValue * this.inputValue) - 1
    }
    else if(this.inputValue) {
      console.log((this.inputValue * this.inputValue) + 1)
      this.outputValue = (this.inputValue * this.inputValue) + 1
    }
  }
}
