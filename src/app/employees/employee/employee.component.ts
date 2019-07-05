import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.reset();
  }

  reset(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    // alert("dd");
    this.service.formData = {
      EmployeeId: 0,
      FullName: "",
      Position: '',
      EmpCode: '',
      Mobile: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeId == 0) {
      this.service.insertData(form.value);
    }
    else {
      this.service.UpdateData(form.value);
    }
    this.reset(form);
  }

}
