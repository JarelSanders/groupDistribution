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
    groupName: new FormControl(''),
    groupNum: new FormControl(''),
  });

  names: Todo[] = [];
  isShow: boolean = false;
  addUser: String = '';
  num: any = [];

  constructor() {}

  ngOnInit(): void {
    this.names = [];
  }

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
