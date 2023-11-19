import styles from "./RadioAndCheckBox.module.scss";
export interface RadioAndCheckBoxProps {
  name: string;
  label: string;
  id: string;
  type: string;
  value: string;
  register: any;
  errors: any;
}
const RadioAndCheckBox = ({
  name,
  label,
  id,
  type,
  value,
  register,
  errors,
}: RadioAndCheckBoxProps) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        {...register(name)}
        value={value}
        className={styles.input}
      />
      <label htmlFor={name}>{label}</label>
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
    </div>
  );
};
export default RadioAndCheckBox;
