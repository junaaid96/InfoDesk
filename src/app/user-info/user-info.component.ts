import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Academic} from '../model/academic.model';
import {User} from '../model/user.model';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  totalUser: any[]= [];

  institutes = ['ABC University', 'XYZ University', 'LMN College'];
  departments = ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering'];

  constructor() {
  }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl(),
    userAcademic: new FormArray([
      this.createUserAcademicForm()
    ])
  });

  get userAcademic(): FormArray {
    return this.userForm.get('userAcademic') as FormArray;
  }


  createUserAcademicForm(): FormGroup {
    return new FormGroup({
      institute: new FormControl(),
      department: new FormControl(''),
      cgpa: new FormControl('')
    });
  }

  submitForm() {
    console.log(this.userForm.value);
    this.totalUser.push(this.userForm.value);
  }

  addAcademic() {
  }

}
