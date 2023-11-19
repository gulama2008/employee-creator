import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient,QueryClientProvider} from "react-query";
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
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/employees"
            element={<EmployeesPage/>}
          />
          <Route path="/employees/:id" element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
