import { Component, OnInit } from '@angular/core';
import {userInput} from '../input.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  userDetails

  constructor(private ui : userInput) { }

  ngOnInit(): void {

    this.userDetails = this.ui.userDetails
  }

}
