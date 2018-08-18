import {Component} from '@angular/core';
import { Employee } from '../employee/employee.model';
import { FormEmployeeService } from './form-employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {

  languages = [];
  employee = new Employee('', '',false,'w2','default','');
  hasPrimaryLanguageError = false;

  constructor(private formEmployeeService: FormEmployeeService) {
    this.formEmployeeService.getLanguages()
      .subscribe(
        (data) => this.languages = data.languages,
        (error) => console.log('get error: ', error)
      )
  }

  firstNameToUpperCase(value: string) {
    this.employee.firstName = this.firstLetterToUpperCaseOtherToLowerCase(value);
  }

  lastNameToUpperCase(value: string) {
    this.employee.lastName = this.firstLetterToUpperCaseOtherToLowerCase(value);
  }

  private firstLetterToUpperCaseOtherToLowerCase(value: string) {
    if (value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    } else {
      return value;
    }
  }

  validatePrimaryLanguage(value: string) {
    if  (value === "default") {
      this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
  }

  submitForm(form: NgForm) {
    // validate form
    this.validatePrimaryLanguage(this.employee.primaryLanguage);
    if (this.hasPrimaryLanguageError) {
      return;
    }

    this.formEmployeeService.postEmployeeForm(this.employee)
      .subscribe(
        (data) => console.log('success: ', data),
        (error) => console.log('error: ', error)
      );
  }

}



