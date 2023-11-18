import { useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../PersonalDetailsForm/PersonalDetailsForm";
import { useQuery } from "react-query";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    if (error instanceof Error) return <span>Error:Employee with id { id} does not exist</span>;
  }

  const formSubmit = (data: FormData) => {
    Employee.updateEmployeeById(parseInt(id), data)
      .then(() => handleShow())
      .catch((e) => console.error(e));
  };

  return (
    <>
      <PersonalDetailsForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        formSubmit={formSubmit}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Personal information of employee {data?.firstName} { data?.lastName} has been updated successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeePage;
