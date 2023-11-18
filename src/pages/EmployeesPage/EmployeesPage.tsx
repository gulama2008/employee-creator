import { useQuery} from "react-query";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../services/employees-service";

const EmployeesPage = () => {
  
  const { isLoading, isError, data, refetch } = useQuery(["employeesData"], Employee.get);
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
        return <EmployeeCard employee={e} key={e.id} refetch={ refetch} />;
      })}
    </div>
  );
};

export default EmployeesPage;
