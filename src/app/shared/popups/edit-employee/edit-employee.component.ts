import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employeeUpdateForm: FormGroup;

  individualData;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private EmployeeFormbuilder: FormBuilder,
    private employService: EmployeeService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditEmployeeComponent>
  ) {
    this.formInitialize();
  }

  ngOnInit() {
    this.getIndividualEmployee();
  }

  formInitialize() {
    this.employeeUpdateForm = this.EmployeeFormbuilder.group({
      firstName : ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]]
    });
  }

  getIndividualEmployee() {
    this.employService.getEmployees().then(result => {
      result.forEach(r => {
        if (r.payload.doc.id === this.data.employeeId) {
          this.employeeUpdateForm.patchValue({
                firstName : r.payload.doc.data().f_name,
                lastName: r.payload.doc.data().last_name,
                dob: r.payload.doc.data().dob,
                address: r.payload.doc.data().address,
                email: r.payload.doc.data().email,
                telephone: r.payload.doc.data().telephone
            });
        }
      });
    });
  }
  updateEmployee(key, data) {

    const datas = {
      f_name : data.firstName,
      last_name: data.lastName,
      dob: data.dob,
      address: data.address,
      email: data.email,
      telephone: data.telephone
    };

    this.employService.updateUser(key, datas).then(result => {
      this.dialogRef.close();
      this.snackBar.open('Employee updated successfully' , 'close');
    });
  }

}
