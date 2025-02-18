import {Injectable} from '@angular/core';
import {User} from "./model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;
  private totalUser: User[] = [];
  private isEditing = false;

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

  getUserByIndex(i: number): User {
    return this.totalUser[i];
  }

  getUserIndex(user: User): number {
    return this.totalUser.indexOf(user);
  }

  addUser(user: User) {
    this.totalUser.push(user);
  }

  setUser(user: User) {
    this.user = user;
  }

  updateUser(i: number, updatedUser: User) {
    this.totalUser[i] = updatedUser;
  }

  getUser(): User {
    return this.user;
  }

  removeUser(i: number): User[] {
    return this.totalUser.splice(i, 1);
  }

  setEditingStatus(status: boolean) {
    this.isEditing = status;
  }

  getEditingStaus(): boolean {
    return this.isEditing;
  }
}
