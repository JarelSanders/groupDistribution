import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  Input,
  Output,
  NgModule,

} from '@angular/core';
import { Todo } from '../models/Todo';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-group-names',
  templateUrl: './group-names.component.html',
  styleUrls: ['./group-names.component.scss'],
})
export class GroupNamesComponent implements OnInit {
  // Initialize a FormGroup with two FormControls: groupName and groupNum
  groupList = new FormGroup({
    groupName: new FormControl(''),
    groupNum: new FormControl(''),
  });
  
  // Initialize an array to store team members (objects with User and Group properties)
  names: Todo[] = [];

  // Boolean flag to control the visibility of something in the UI
  isShow: boolean = false;

  // String variable to store user input for adding a member
  addUser: String = '';

  // An array to store numerical values
  num: any = [];

  constructor() {}

  // Initialize the 'names' array to an empty array
  ngOnInit(): void {
    this.names = [];
  }

  // Function to handle the input of group numbers
  groupNumber = () => {
    // Get the numerical value from an input field with the id 'grpNum'
    this.num = (<HTMLInputElement>document.getElementById('grpNum')).value;
    let num = <HTMLInputElement>document.getElementById('grpNum');

    // Check if the value is not between 1 and 8 (inclusive)
    if (this.num <= 0 || this.num > 8) {
      // Show an alert and enable the input field
      alert('Enter a number between 1 - 8');
      num.disabled = false;
    } else {
      // Disable the input field
      num.disabled = true;
    }
  };

  // Function to add a team member to the 'names' array
  addMember = () => {
    // Set the isShow flag to true
    this.isShow = true;

    // Check if conditions for adding a member are met
    if (
      this.addUser == '' ||
      (<HTMLInputElement>document.getElementById('grpName')).value == '' ||
      this.num > 8
    ) {
      // Show an alert if conditions are not met
      alert('Please make sure a group number(1-8) and team member is entered!');
    } else {
      // Add a new object to the 'names' array with User and Group properties
      this.names.push({
        User: this.addUser,
        Group: this.num,
      });
       // Clear the input field for the group name
      (<HTMLInputElement>document.getElementById('grpName')).value = '';
    }
  };

  // Function to distribute members into random groups
  groupTeams = () => {
    // Set the isShow flag to false
    this.isShow = false;

    // Loop through each team member
    for (var i = 0; i < this.names.length; i++) {
      let groupNumUpdate: any = [Math.floor(Math.random() * this.num) + 1];
      let mytext = document.getElementsByClassName('resultgroup2');
      mytext[i].innerHTML = groupNumUpdate;
    }
  };

  // Function to reset page content
  resetPage = () => {
     // Clear input fields and reset arrays
    (<HTMLInputElement>document.getElementById('grpNum')).value = '';
    (<HTMLInputElement>document.getElementById('grpName')).value = '';
    this.num = [];
    this.names = [];

    // Enable the input field with the id 'grpNum'
    let get = <HTMLInputElement>document.getElementById('grpNum');
    get.disabled = false;
  };
}
