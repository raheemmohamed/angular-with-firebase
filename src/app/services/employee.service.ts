import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private firestrore: AngularFirestore,
    ) { }

  getEmployees() {
    return new Promise<any>((resolve, reject) => {
      this.firestrore.collection('/employees').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }
  createEmployee(e) {
    return this.firestrore.collection('employees').add({
      f_name: e.firstName,
      last_name: e.lastName,
      dob: e.dob,
      address: e.address,
      email: e.email,
      telephone: e.telephone
    });
  }

  updateUser(userKey, val) {
    return this.firestrore.collection('employees').doc(userKey).set(val);
  }

  deleteEmployee(userKey) {
    return this.firestrore.collection('employees').doc(userKey).delete();
  }
}
