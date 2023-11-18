import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import { Employee } from "../../services/employees-service";
import { FormData } from "../EmployeePage/EmployeePage";
interface NewEmployeePageProps {
  handleClose: () => any;
  refetch: () => any;
}
const NewEmployeePage = ({ handleClose,refetch }: NewEmployeePageProps) => {
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
      type: "",
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
      onGoing: "",
      basis: "",
      hoursPerWeek: "",
    },
    mode: "all",
  });

  const formSubmit = (data: FormData) => {
    Employee.createEmployee(data)
      .then(() => {
        handleClose();
        refetch();
      })
      .catch((e) => console.error(e));
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

export default NewEmployeePage;
