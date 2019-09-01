import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { Employee } from './../../models/user';
import { EmployeeService } from './../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../../shared/popups/create-employee/create-employee.component';
import { EditEmployeeComponent } from './../../shared/popups/edit-employee/edit-employee.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employeeData = [];

  displayedColumns = ['firstName', 'lastName', 'DOB', 'address', 'email', 'telephone', 'options'];
  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private authService: AuthenticationService,
    private employService: EmployeeService,
    public createEmployeeModal: MatDialog,
    public editEmployeesModal: MatDialog,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit() {
    this.employService.getEmployees().then(result => {
      this.dataSource.data = result;
      this.employeeData = result;
      console.log(this.employeeData);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createNewEmployees() {
    const dialogRef = this.createEmployeeModal.open(CreateEmployeeComponent, {
      height: '450px',
      width: '650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editEmployee(id) {
    console.log(id);
    const dialogRef = this.editEmployeesModal.open(EditEmployeeComponent, {
      data: { employeeId: id },
      height: '450px',
      width: '650px',
    });
  }

  removeEmployees(id) {
    this.employService.deleteEmployee(id)
    .then(
      res => {
        this.snackBar.open('Employee was deleted Successfully' , 'close');
      }
    );
  }

}
