import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {

  userForm;

  constructor(private fb: FormBuilder) { }

  // push new form control when user clicks add button
  addNumber() {
    const control = <FormArray>this.userForm.controls['numbers'];
    control.push(new FormControl())
  }

  submit(value) {
    let arr = [];
    for (let x in value.numbers) {
      arr.push({ [`phoneNumber${x+1}`]: value.numbers[x] })
    }
    console.log(arr)
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      numbers: this.fb.array([
        new FormControl()
      ])
    });
  }

}
