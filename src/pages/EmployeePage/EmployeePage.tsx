import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { EmployeeInfo } from "../../App";
import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import { useQuery } from "react-query";
export interface FormData {
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
const EmployeePage = () => {
  // const { id } = useParams();
  let id: string = useParams().id!;

  const { isLoading, isError, data, error } = useQuery(
    ["employeeData", id],
    () => Employee.getEmployeeById(parseInt(id))
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      type: "permanent",
      startDateDay: "",
      startDateMonth: "",
      startDateYear: "",
      finishDateDay: "",
      finishDateMonth: "",
      finishDateYear: "",
      onGoing: "false",
      basis: "fulltime",
      hoursPerWeek: "",
    },
    values: data,
    mode: "all",
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    if (error instanceof Error) return <span>Error:{error.message}</span>;
  }

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
