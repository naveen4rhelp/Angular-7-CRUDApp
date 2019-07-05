import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  readonly apiUrl = "http://localhost:56547/api/Employee";
  readonly apiUrl1 = "http://localhost:56547/api/Emp";
  constructor(private http: HttpClient) { }

  insertData(model: Employee) {
    console.log(model);
    this.http.post(this.apiUrl, model)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.GetData();
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  GetData() {
    //return this.http.get(this.apiUrl).toPromise().then(n => this.list = n as Employee[]);
    this.http.get(this.apiUrl)
      .subscribe(
        data => {
          console.log("Get Request is successful ", data);
          this.list = data as Employee[]
        },
        error => {
          console.log("Error", error);
        }
      );

  }

  UpdateData(model: Employee) {
    this.http.put(this.apiUrl+"/"+model.EmployeeId, model)
      .subscribe(
        data => {
          console.log("Put Request is successful ", data);
          this.GetData();
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  DeleteData(model: Employee) {
      this.http.delete(this.apiUrl+"/"+model.EmployeeId)
      .subscribe(
        data => {
          console.log("Delete successful ", data);
          this.GetData();
        },
        error =>{
          console.log("Error", error);
        }
      )
  }
}
