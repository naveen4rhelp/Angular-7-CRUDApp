import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.GetData();
  }

  edit(model: Employee) {
    this.service.formData = Object.assign({}, model);
  }

  delete(model: Employee) {
    if (confirm("Are you sure?do you want to delete " + model.FullName)) {
      this.service.DeleteData(model);
    }
  }

}
