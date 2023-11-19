import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../../components/PersonalDetailsForm/PersonalDetailsForm";
import { Employee } from "../../services/employees-service";
import { FormData } from "../EmployeePage/EmployeePage";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInformationSchema } from "../../services/schema";
interface NewEmployeePageProps {
  handleClose: () => any;
  refetch: () => any;
}

const NewEmployeePage = ({ handleClose, refetch }: NewEmployeePageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      type: "",
      startDateDay: "",
      startDateMonth: "",
      startDateYear: "",
      finishDateDay: "",
      finishDateMonth: "",
      finishDateYear: "",
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
      handleCancel={handleClose}
    />
  );
};

export default NewEmployeePage;
