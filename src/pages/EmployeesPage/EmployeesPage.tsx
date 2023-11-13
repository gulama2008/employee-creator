import { EmployeeInfo } from "../../App";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

export interface EmployeesProps {
  employees: EmployeeInfo[];
}

const EmployeesPage = ({ employees }: EmployeesProps) => {
  console.log(employees);

  return (
    <div>
      {employees.map((employee) => {
        return <EmployeeCard employee={employee} key={employee.id} />;
      })}
    </div>
  );
};

export default EmployeesPage;
