import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../model/user.model";
import {UserInfoComponent} from "../user-info/user-info.component";
import {Academic} from "../model/academic.model";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  totalUser: User[] = this.userService.getAllUsers();
  @ViewChild(UserInfoComponent) userInfoComponent!: UserInfoComponent;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  updateUserEvent(i: number) {
    const user = this.userService.getAUser(i);

    const newName = window.prompt('Name: ', user.name);
    const newEmail = window.prompt('Email: ', user.email);
    window.prompt(JSON.stringify(user.academic));

    user.name = newName;
    user.email = newEmail;

    if (user && this.userInfoComponent) {
      this.userInfoComponent.setUserForm(user);
    }
  }

  removeUserEvent(i: number) {
    this.userService.removeUser(i);
  }
}
