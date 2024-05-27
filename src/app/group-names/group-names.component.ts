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
  groupList = new FormGroup({
    groupName: new FormControl(''), //// FormControl for group name, initially empty.
    groupNum: new FormControl(''), //// FormControl for group number, initially empty.
  });

  // Declares an array to store names and groups.
  names: Todo[] = [];
  // Boolean to toggle the visibility of certain UI elements.
  isShow: boolean = false;
  // String to store the name of the user being added.
  addUser: String = '';
  // Variable to store the group number input, with a flexible type.
  num: any = [];

  constructor() {}

  // Lifecycle hook that runs after the component's view has been initialized
  ngOnInit(): void {
     // Resets the names array to be empty when the component is initialized.
    this.names = [];
  }

    // Function to handle the group number input validation.
  groupNumber = () => {
    this.num = (<HTMLInputElement>document.getElementById('grpNum')).value;
    let num = <HTMLInputElement>document.getElementById('grpNum');
    if (this.num <= 0 || this.num > 8) {
      alert('Enter a number greater than 0');
      num.disabled = false;
    } else {
      num.disabled = true;
    }
  };

  // adds users to group list
  addMember = () => {
    this.isShow = true;

    if (
      this.addUser == '' ||
      (<HTMLInputElement>document.getElementById('grpName')).value == '' ||
      this.num > 8
    ) {
      alert('Please make sure a group number(1-8) and team member is entered!');
    } else {
      this.names.push({
        User: this.addUser,
        Group: this.num,
      });
      (<HTMLInputElement>document.getElementById('grpName')).value = '';
    }
  };

  //puts added users in random groups
  groupTeams = () => {
    this.isShow = false;

    for (var i = 0; i < this.names.length; i++) {
      let groupNumUpdate: any = [Math.floor(Math.random() * this.num) + 1];
      let mytext = document.getElementsByClassName('resultgroup2');
      mytext[i].innerHTML = groupNumUpdate;
    }
  };

  //resets page content
  resetPage = () => {
    (<HTMLInputElement>document.getElementById('grpNum')).value = '';
    (<HTMLInputElement>document.getElementById('grpName')).value = '';
    this.num = [];
    this.names = [];
    let get = <HTMLInputElement>document.getElementById('grpNum');
    get.disabled = false;
  };
}
