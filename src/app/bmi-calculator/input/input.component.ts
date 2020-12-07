import { Component, OnInit } from '@angular/core';
import {userInput} from '../input.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name;
  height;
  weight;
  age;
  gender;
  activityl;

  constructor(private ui : userInput) { }

  ngOnInit(): void {
  }

  adduser(){
    this.ui.takeinput(this.name, this.height, this.weight, this.age, this.gender, this.activityl)
  }

}
