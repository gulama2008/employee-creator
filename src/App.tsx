import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import NewEmployeePage from "./pages/NewEmployeePage/NewEmployeePage";
import { Employee } from "./services/employees-service";
import { useEffect, useState } from "react";
import { QueryClient,QueryClientProvider,useQuery,useMutation } from "react-query";
export interface EmployeeInfo {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  type: string;
  startDateDay: string;
  startDateMonth: string;
  startDateYear: string;
  finishDateDay: string;
  finishDateMonth: string;
  finishDateYear: string;
  onGoing: string;
  basis: string;
  hoursPerWeek: string;
}

const queryClient = new QueryClient();

function App() {
  // const [employees, setEmployees] = useState<any>([]);
//   useEffect(() => {
//     const data = Employee.get();
// console.log(data);

//     setEmployees(data);
//   }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/employees"
            element={<EmployeesPage/>}
          />
          <Route path="/employees/:id" element={<EmployeePage />} />
          <Route path="/employees/new" element={<NewEmployeePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
