import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }
  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
       hireDate: employee.hireDate ,
      isPermanent: employee.isPermanent
    });
  }
}
