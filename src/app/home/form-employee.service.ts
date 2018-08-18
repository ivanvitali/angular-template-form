import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Employee } from "../employee/employee.model";


@Injectable()
export class FormEmployeeService {

    constructor(private http: Http) {
    }

    postEmployeeForm(employee: Employee) {
        console.log('posting employee: ', employee);
    }
}