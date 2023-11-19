import styles from "./InputText.module.scss"
export interface TextInputProps{ 
    name: string;
    label: string;
    id: string;
    register: any;
    errors: any;
}

const InputText = ({ name, label, id, register, errors }: TextInputProps) => {
  console.log(errors);
  
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        {...register(name)}
        className={
          name === "address"
            ? styles.input_address
            : name === "startDateDay" || name === "startDateYear"?styles.input_date:styles.input
        }
      />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default InputText