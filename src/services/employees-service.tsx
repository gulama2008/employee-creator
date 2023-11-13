import employees from "../data/employees.json";

export class Employee {
  public static get() {
    return employees;
  }

  public static getEmployeeById(id: number) {
    const employee = employees.find((employee) => employee.id === id);
    return employee;
  }
}
