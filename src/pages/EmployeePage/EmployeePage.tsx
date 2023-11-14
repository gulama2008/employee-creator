import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { EmployeeInfo } from "../../App";
import { useForm } from "react-hook-form";
import InputText from "../../components/Form/InputText/InputText";
import RadioAndCheckBox from "../../components/Form/RadioAndCheckBox/RadioAndCheckBox";
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
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <h1>Personal Information</h1>
      </div>
      <InputText
        name="firstName"
        label="First name"
        id="firstName"
        register={register}
        errors={errors}
      />
      <InputText
        name="middleName"
        label="Middle name (if applicable)"
        id="middleName"
        register={register}
        errors={errors}
      />
      <InputText
        name="lastName"
        label="Last name"
        id="lastName"
        register={register}
        errors={errors}
      />
      <div>Contact details</div>
      <InputText
        name="email"
        label="Email address"
        id="email"
        register={register}
        errors={errors}
      />
      <InputText
        name="phone"
        label="Mobile number"
        id="phone"
        register={register}
        errors={errors}
      />
      <InputText
        name="address"
        label="Residential address"
        id="address"
        register={register}
        errors={errors}
      />
      <div>Employee status</div>
      <div>
        <div>What is contract type?</div>
        <RadioAndCheckBox
          name="type"
          label="Permanent"
          id="permanent"
          type="radio"
          value="permanent"
          register={register}
          errors={errors}
        />
        <RadioAndCheckBox
          name="type"
          label="Contract"
          id="contract"
          type="radio"
          value="contract"
          register={register}
          errors={errors}
        />
      </div>

      <div>
        <div>Start date</div>
        <InputText
          name="startDate.day"
          label="Day"
          id="startDay"
          register={register}
          errors={errors}
        />
        <InputText
          name="startDate.month"
          label="Month"
          id="startMonth"
          register={register}
          errors={errors}
        />
        <InputText
          name="startDate.year"
          label="Year"
          id="startYear"
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <div>Finish date</div>
        <InputText
          name="finishDate.day"
          label="Day"
          id="finishDay"
          register={register}
          errors={errors}
        />
        <InputText
          name="finishDate.month"
          label="Month"
          id="finishMonth"
          register={register}
          errors={errors}
        />
        <InputText
          name="finishDate.year"
          label="Year"
          id="finishYear"
          register={register}
          errors={errors}
        />
      </div>
      <RadioAndCheckBox
        name="onGoing"
        label="On going"
        id="onGoing"
        type="checkbox"
        value="true"
        register={register}
        errors={errors}
      />
      <div>
        <div>Is this on a full-time or part-time basis?</div>
        <RadioAndCheckBox
          name="basis"
          label="Full-time"
          id="fulltime"
          type="radio"
          value="fulltime"
          register={register}
          errors={errors}
        />
        <RadioAndCheckBox
          name="basis"
          label="Part-time"
          id="parttime"
          type="radio"
          value="parttime"
          register={register}
          errors={errors}
        />
      </div>
      <InputText
        name="hoursPerWeek"
        label="Hours per week"
        id="hoursPerWeek"
        register={register}
        errors={errors}
      />
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default EmployeePage;
