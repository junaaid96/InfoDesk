import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Academic} from '../model/academic.model';
import {Router} from '@angular/router';
import {UserService} from "../user.service";
import {User} from "../model/user.model";
import {state} from "@angular/animations";

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  institutes: string[] = this.userService.getInstitutesList();
  departments: string[] = this.userService.getDepartmentsList();

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  // ngOnInit(): void {
  //   const navigation = this.router.getCurrentNavigation();
  //   const state = navigation?.extras.state as { user: User };
  //   if (state && state.user) {
  //     this.setUserForm(state.user);
  //   }
  // }

  userForm = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    userAcademic: new FormArray([
      this.createUserAcademicForm()
    ])
  });

  setUserForm(user: User) {
    this.userForm.patchValue({
      userName: user.name,
      userEmail: user.email,
      userAcademic: user.academic
    });
  }

  get userAcademic(): FormArray {
    return this.userForm.get('userAcademic') as FormArray;
  }

  createUserAcademicForm(): FormGroup {
    return new FormGroup({
      institute: new FormControl(),
      department: new FormControl(),
      cgpa: new FormControl()
    });
  }

  submitForm() {
    const formValue = this.userForm.value;

    const user = {
      name: formValue.userName,
      email: formValue.userEmail,
      academic: formValue.userAcademic
    };

    this.userService.addUser(user);

    this.router.navigate(['user-list']);
  }

  protected readonly state = state;
}
