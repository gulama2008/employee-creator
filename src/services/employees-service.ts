import { EmployeeInfo } from "../App";
import employees from "../data/employees.json";
import instance from "./axios";

export class Employee {
  public static async get() {
    const data = await instance.get('/employees');
    const employeeArray: EmployeeInfo[] = data.data;
    return employeeArray;
  }

  public static getEmployeeById(id: number) {
    const employee = employees.find((employee) => employee.id === id);
    return employee;
  }
}
