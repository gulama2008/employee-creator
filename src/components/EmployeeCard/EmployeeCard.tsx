import { Link } from "react-router-dom";
import { EmployeeInfo } from "../../App"

export interface EmployeeCardProps { 
    employee: EmployeeInfo;
}
const EmployeeCard = ({ employee }: EmployeeCardProps) => {
    console.log(employee);
  return (
      <div>
          <div>
              <p>{employee.firstName} {employee.lastName}</p>
              <div>
                  <Link to={`${employee.id}`}>Edit</Link>
                  <a href="">Remove</a>
              </div>
          </div>
          <p>{employee.type} - {(new Date()).getFullYear()-parseInt(employee.startDateYear)}yrs</p>
          <p>{ employee.email}</p>
    </div>
  )
}

export default EmployeeCard