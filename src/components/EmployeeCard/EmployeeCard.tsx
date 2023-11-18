import { Link } from "react-router-dom";
import { EmployeeInfo } from "../../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Employee } from "../../services/employees-service";
export interface EmployeeCardProps {
  employee: EmployeeInfo;
  refetch: () => any;
}
const EmployeeCard = ({ employee, refetch }: EmployeeCardProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const { mutate } = useMutation((): any => {
  //     Employee.deleteEmployeeById(employee.id);
  //   }, {
  //       onSuccess: () => {
  //           queryClient.invalidateQueries("employeesData");
  //       }
  //   });
  const handleRemove = async () => {
    // mutate();
    Employee.deleteEmployeeById(employee.id)
      .then(() => {
        refetch();
        setShow(false);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <div>
        <p>
          {employee.firstName} {employee.lastName}
        </p>
        <div>
          <Link to={`${employee.id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleShow}>Remove</button>
        </div>
      </div>
      <p>
        {employee.type} -{" "}
        {new Date().getFullYear() - parseInt(employee.startDateYear)}yrs
      </p>
      <p>{employee.email}</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove employee {employee.firstName}{" "}
          {employee.lastName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeCard;
