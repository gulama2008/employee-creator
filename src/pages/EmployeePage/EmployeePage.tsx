import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { EmployeeInfo } from "../../App";
import { useForm } from "react-hook-form";
export interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  type: string;
  startDate: string;
  finishDate: string;
  isFulltime: boolean;
}
const EmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<FormData>();
  useEffect(() => {
    if (id) {
      const employee = Employee.getEmployeeById(parseInt(id));
      delete (employee as { id?: number }).id;
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
      type: "",
      startDate: "",
      finishDate: "",
      isFulltime: true,
    },
    mode: "all",
  });

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [employee]);
  return (
    <form>
      <div>
        <h1>Personal Information</h1>
      </div>
      <div>
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="middleName">Middle name (if applicable)</label>
        <input type="text" id="middleName" {...register("middleName")} />
        {errors.middleName && <p>{errors.middleName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>Contact details</div>
      <div>
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone">Mobile number</label>
        <input type="text" id="phone" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="address">Residential address</label>
        <input type="text" id="address" {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>Employee status</div>
      <div>
        <label htmlFor="type">What is contract type?</label>
        <input type="text" id="type" {...register("type")} />
        {errors.type && <p>{errors.type.message}</p>}
      </div>
      <div>
        <label htmlFor="startDate">Start date</label>
        <input type="text" id="startDate" {...register("startDate")} />
        {errors.startDate && <p>{errors.startDate.message}</p>}
      </div>
      <div>
        <label htmlFor="finishDate">Finish date</label>
        <input type="text" id="finishDate" {...register("finishDate")} />
        {errors.finishDate && <p>{errors.finishDate.message}</p>}
      </div>
      <div>
        <label htmlFor="isFulltime">
          Is this on a full-time or part-time basis
        </label>
        <input type="text" id="isFulltime" {...register("isFulltime")} />
        {errors.isFulltime && <p>{errors.isFulltime.message}</p>}
      </div>
    </form>
  );
};

export default EmployeePage;
