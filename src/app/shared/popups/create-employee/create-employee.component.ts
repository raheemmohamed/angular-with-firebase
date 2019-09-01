import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(
    private EmployeeFormbuilder: FormBuilder,
    private employService: EmployeeService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateEmployeeComponent> ) { }

  ngOnInit() {
    this.employeeFormBuilder();
  }

  employeeFormBuilder() {
    this.employeeForm = this.EmployeeFormbuilder.group({
      firstName : ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]]
    });
  }

  addNewEmployee(submitFormVal) {
    this.employService.createEmployee(submitFormVal)
    .then(
      res => {
        this.employeeFormBuilder();
        this.dialogRef.close();
        this.snackBar.open(submitFormVal.firstName + ' Employee successfully added' , 'close');
      }
    );
  }

}
