import employees from "../data/employees.json";
// export interface EmployeeInfo {
//     firstName: string,
//     middleName:string,
//     lastName: string,
//     email: string,
//     phone: string,
//     address: string,
//     type: string,
//     startDate: string,
//     finishDate: string,
//     isFulltime: boolean
// }

export class Employee {
  public static get() {
    return employees;
  }

  public static getEmployeeById(id: number) {
      const employee = employees.find((employee) => (employee.id = id));
    return employee;
  }
}
