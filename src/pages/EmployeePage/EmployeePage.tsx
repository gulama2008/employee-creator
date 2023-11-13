import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { EmployeeInfo } from "../../App";
import { useForm } from "react-hook-form";
import Input from "../../components/Form/Input/Input";
import Radio from "../../components/Form/Radio/Radio";
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
      <Input
        name="firstName"
        label="First name"
        id="firstName"
        register={register}
        errors={errors}
      />
      <Input
        name="middleName"
        label="Middle name (if applicable)"
        id="middleName"
        register={register}
        errors={errors}
      />
      <Input
        name="lastName"
        label="Last name"
        id="lastName"
        register={register}
        errors={errors}
      />
      <div>Contact details</div>
      <Input
        name="email"
        label="Email address"
        id="email"
        register={register}
        errors={errors}
      />
      <Input
        name="phone"
        label="Mobile number"
        id="phone"
        register={register}
        errors={errors}
      />
      <Input
        name="address"
        label="Residential address"
        id="address"
        register={register}
        errors={errors}
      />
      <div>Employee status</div>
      <div>
        <div>What is contract type?</div>
        <Radio
          name="type"
          label="Permanent"
          id="permanent"
          value="permanent"
          register={register}
          errors={errors}
        />
        <Radio
          name="type"
          label="Contract"
          id="contract"
          value="contract"
          register={register}
          errors={errors}
        />
      </div>

      <div>
        <div>Start date</div>
        <div>
          <label htmlFor="startDay">Day</label>
          <input type="text" id="startDay" {...register("startDate.day")} />
          {errors.startDate?.day && <p>{errors.startDate.day.message}</p>}
        </div>
        <div>
          <label htmlFor="startMonth">Month</label>
          <input type="text" id="startMonth" {...register("startDate.month")} />
          {errors.startDate?.month && <p>{errors.startDate.month.message}</p>}
        </div>
        <div>
          <label htmlFor="startYear">Year</label>
          <input type="text" id="startYear" {...register("startDate.year")} />
          {errors.startDate?.year && <p>{errors.startDate.year.message}</p>}
        </div>
      </div>
      <div>
        <div>Finish date</div>
        <div>
          <label htmlFor="finishDay">Day</label>
          <input type="text" id="finishDay" {...register("finishDate.day")} />
          {errors.finishDate?.day && <p>{errors.finishDate.day.message}</p>}
        </div>
        <div>
          <label htmlFor="finishMonth">Month</label>
          <input
            type="text"
            id="finishMonth"
            {...register("finishDate.month")}
          />
          {errors.finishDate?.month && <p>{errors.finishDate.month.message}</p>}
        </div>
        <div>
          <label htmlFor="finishYear">Year</label>
          <input type="text" id="finishYear" {...register("finishDate.year")} />
          {errors.finishDate?.year && <p>{errors.finishDate.year.message}</p>}
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          id="onGoing"
          {...register("onGoing")}
          value="true"
        />
        <label htmlFor="onGoing">On going</label>
        {errors.finishDate && <p>{errors.finishDate.message}</p>}
      </div>
      <div>
        <div>Is this on a full-time or part-time basis?</div>
        <div>
          <input
            type="radio"
            id="fulltime"
            {...register("basis")}
            value="fulltime"
          />
          <label htmlFor="type">Full-time</label>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
        <div>
          <input
            type="radio"
            id="parttime"
            {...register("basis")}
            value="parttime"
          />
          <label htmlFor="type">Part-time</label>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="hoursPerWeek">Hours per week</label>
        <input type="text" id="hoursPerWeek" {...register("hoursPerWeek")} />
        {errors.hoursPerWeek && <p>{errors.hoursPerWeek.message}</p>}
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default EmployeePage;
