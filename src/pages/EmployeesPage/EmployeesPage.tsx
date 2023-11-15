import { useQuery, useQueryClient } from "react-query";
import { EmployeeInfo } from "../../App";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../services/employees-service";

// export interface EmployeesProps {
//   employees: EmployeeInfo[];
// }

const EmployeesPage = () => {
  
  // const queryClient = useQueryClient();
  const { isLoading,isError, data } = useQuery(["employeesData"], Employee.get);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: </span>;
  }
  console.log(data);
  return (
    <div>
      {data?.map((e) => {
        return <EmployeeCard employee={e} key={e.id} />;
      })}
    </div>
  );
};

export default EmployeesPage;
