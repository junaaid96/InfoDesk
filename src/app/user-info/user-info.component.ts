import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Academic} from '../model/academic.model';
import {Router} from '@angular/router';
import {UserService} from "../user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  getEditingStatus = this.userService.getEditingStaus();
  institutes: string[] = this.userService.getInstitutesList();
  departments: string[] = this.userService.getDepartmentsList();
  userIndex: number;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.setUserForm(user);
      this.userIndex = this.userService.getUserIndex(user);
    }
  }

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
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
      institute: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      cgpa: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;

      const user = {
        name: formValue.userName,
        email: formValue.userEmail,
        academic: formValue.userAcademic
      };

      this.userService.addUser(user);
      this.router.navigate(['user-list']);
    } else {
      console.log(this.userForm.controls)
    }
  }

  updateForm() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;

      const updatedUser = {
        name: formValue.userName,
        email: formValue.userEmail,
        academic: formValue.userAcademic
      };

      this.userService.updateUser(this.userIndex, updatedUser);
      this.router.navigate(['user-list']);
    } else {
      console.log(this.userForm.controls)
    }
  }
}
