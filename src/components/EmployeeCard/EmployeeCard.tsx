import { Link } from "react-router-dom";
import { EmployeeInfo } from "../../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Employee } from "../../services/employees-service";
import styles from './EmployeeCard.module.scss'
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
    <div className={styles.container}>
      <div className={styles.name}>
        <p>
          {employee.firstName} {employee.lastName}
        </p>
        <div className={styles.link_container}>
          <Link to={`${employee.id}`}>
            <p className={styles.link}>Edit</p>
          </Link>
          <p>|</p>
          <p onClick={handleShow} className={styles.link}>
            Remove
          </p>
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
