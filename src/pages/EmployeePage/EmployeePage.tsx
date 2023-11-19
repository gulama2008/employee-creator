import { Link, useParams } from "react-router-dom";
import { Employee } from "../../services/employees-service";
import { useForm } from "react-hook-form";
import PersonalDetailsForm from "../../components/PersonalDetailsForm/PersonalDetailsForm";
import { useQuery } from "react-query";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInformationSchema } from "../../services/schema";
import Header from "../../components/Header/Header";
import back from "../../assets/back-arrow.png";
import styles from "./EmployeePage.module.scss";
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
    reset,
  } = useForm({
    resolver: zodResolver(personalInformationSchema),
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
    if (error instanceof Error)
      return <span>Error:Employee with id {id} does not exist</span>;
  }

  const formSubmit = (data: FormData) => {
    Employee.updateEmployeeById(parseInt(id), data)
      .then(() => handleShow())
      .catch((e) => console.error(e));
  };

  const handleCancel = () => {
    reset(data);
  };

  return (
    <>
      <Header>
        <div className={styles.header}>
          <Link to="/employees">
            <img src={back} className={styles.back_icon} />
            Back
          </Link>
          <p className={styles.header_text}>Employee details</p>
        </div>
      </Header>
      <div className={styles.main}>
        <PersonalDetailsForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          formSubmit={formSubmit}
          handleCancel={handleCancel}
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Personal information of employee {data?.firstName} {data?.lastName}{" "}
            has been updated successfully!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default EmployeePage;
