import {Component} from '@angular/core';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  languages = ['English', 'Spanish', 'Other'];
  employee = new Employee('', '',false,'','','');

}



