import {Component} from '@angular/core';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  languages = ['English', 'Spanish', 'Other'];
  employee = new Employee('', '',false,'w2','English','');

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

}



