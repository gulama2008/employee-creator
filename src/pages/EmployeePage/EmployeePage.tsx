import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { EmployeeInfo } from "../../App";
import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
export interface FormData {
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
const EmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<EmployeeInfo>();
  useEffect(() => {
    if (id) {
      const employee = Employee.getEmployeeById(parseInt(id));
      // delete (employee as { id?: number }).id;
      setEmployee(employee);
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      type: "permanent",
      startDate: {
        day: "",
        month: "",
        year: "",
      },
      finishDate: {
        day: "",
        month: "",
        year: "",
      },
      onGoing: "false",
      basis: "fulltime",
      hoursPerWeek: "",
    },
    mode: "all",
  });

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [employee]);

  const formSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <PersonalDetailsForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      formSubmit={formSubmit}
    />
  );
};

export default EmployeePage;
