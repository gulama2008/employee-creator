import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import { useEffect } from "react";

const NewEmployeePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
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
    reset();
  }, [isSubmitSuccessful]);

  const formSubmit = () => {
    console.log("created new employee!");
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
