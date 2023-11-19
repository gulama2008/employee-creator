import { useQuery } from "react-query";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../services/employees-service";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import NewEmployeePage from "../NewEmployeePage/NewEmployeePage";
import styles from "./EmployeesPage.module.scss";
import Header from "../../components/Header/Header";
import Button from "react-bootstrap/Button";

const EmployeesPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["employeesData"],
    Employee.get
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    if (error instanceof Error) return <span>Error:{error.message} </span>;
  }

  return (
    <div>
      <Header>
        <p className={styles.header_text}>Employees' list</p>
      </Header>
      <div className={styles.main}>
        <div className={styles.add}>
          <p>Please click on "Edit" to find more details of each employee</p>
          <Button
            variant="primary"
            onClick={handleShow}
            className={styles.add_btn}
          >
            Add employee
          </Button>
        </div>

        {data?.map((e) => {
          return <EmployeeCard employee={e} key={e.id} refetch={refetch} />;
        })}
        <Modal show={show} onHide={handleClose} className={styles.modal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewEmployeePage handleClose={handleClose} refetch={refetch} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default EmployeesPage;
