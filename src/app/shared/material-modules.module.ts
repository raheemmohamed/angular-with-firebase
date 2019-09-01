import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { CreateEmployeeComponent } from './popups/create-employee/create-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './popups/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    CreateEmployeeComponent,
    EditEmployeeComponent
  ]
})
export class MaterialModulesModule { }
