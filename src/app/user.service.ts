import {Injectable} from '@angular/core';
import {User} from "./model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  totalUser: User[] = [];

  institutes = ['ABC University', 'XYZ University', 'LMN College'];
  departments = ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering'];

  constructor() {
  }

  getInstitutesList(): string[] {
    return this.institutes;
  }

  getDepartmentsList(): string[] {
    return this.departments;
  }

  getAllUsers(): User[] {
    return this.totalUser;
  }

  getAUser(i: number) {
    return this.totalUser[i];
  }

  addUser(user: any) {
    this.totalUser.push(user);
  }

  removeUser(i: number): User[] {
    return this.totalUser.splice(i, 1);
  }
}
