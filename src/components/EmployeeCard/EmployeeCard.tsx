import { Link } from "react-router-dom";
import { EmployeeInfo } from "../../App"
import { Utils } from "../../services/uils";

export interface EmployeeCardProps { 
    employee: EmployeeInfo;
}
const EmployeeCard = ({ employee }: EmployeeCardProps) => {
    // const date = new Date();
    // console.log(date.toLocaleDateString);
    
  return (
      <div>
          <div>
              <p>{employee.firstName} {employee.lastName}</p>
              <div>
                  <Link to={`${employee.id}`}>Edit</Link>
                  <a href="">Remove</a>
              </div>
          </div>
          <p>{employee.type} - {(new Date()).getFullYear()-Utils.dateParser(employee.startDate).getFullYear()}yrs</p>
          <p>{ employee.email}</p>
    </div>
  )
}

export default EmployeeCard