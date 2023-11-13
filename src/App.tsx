import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import NewEmployeePage from "./pages/NewEmployeePage/NewEmployeePage";
import { Employee } from "./services/employees-service";
import { useEffect, useState } from "react";

export interface EmployeeInfo {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  type: string;
  startDate: {
    day: string;
    month: string;
    year: string;
  };
  finishDate: {
    day: string;
    month: string;
    year: string;
  };
  onGoing: string;
  basis: string;
  hoursPerWeek: string;
}

function App() {
  const [employees, setEmployees] = useState<EmployeeInfo[]>([]);

  useEffect(() => {
    const data = Employee.get();
    console.log(data);

    setEmployees(data);
  }, []);
  console.log(employees);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/employees"
          element={<EmployeesPage employees={employees} />}
        />
        <Route path="/employees/:id" element={<EmployeePage />} />
        <Route path="/employees/new" element={<NewEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
