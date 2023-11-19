import { EmployeeInfo } from "../App";
import { FormData } from "../pages/EmployeePage/EmployeePage";
import instance from "./axios";

export class Employee {
  public static async get() {
    const data = await instance.get("/employees");
    const employeeArray: EmployeeInfo[] = data.data;
    return employeeArray;
  }

  public static async getEmployeeById(id: number): Promise<EmployeeInfo> {
    const data = await instance.get(`/employees/${id}`);
    return data.data;
  }

  public static async createEmployee(data: FormData): Promise<Employee> {
    const response = await instance.post(`/employees`, data);
    return response.data;
  }

  public static async deleteEmployeeById(id: number): Promise<boolean> {
    const response = await instance.delete(`/employees/${id}`);
    return response.data;
  }

  public static async updateEmployeeById(
    id: number,
    data: FormData
  ): Promise<boolean> {
    const response = await instance.patch(`/employees/${id}`, data);
    console.log(response);
    return response.data;
  }
}
