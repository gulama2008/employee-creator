import { useQuery } from "react-query";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { Employee } from "../../services/employees-service";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import NewEmployeePage from "../NewEmployeePage/NewEmployeePage";

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
      <div>Please click on "Edit" to find more details of each employee</div>
      <button onClick={handleShow}>Add employee</button>
      {data?.map((e) => {
        return <EmployeeCard employee={e} key={e.id} refetch={refetch} />;
      })}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewEmployeePage handleClose={handleClose} refetch={ refetch} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmployeesPage;
