export interface SelectProps {
  label: string;
  name: string;
  values: string[];
  text: string[];
  id: string;
  register: any;
  errors: any;
}
const Select = ({
  label,
  name,
  values,
  text,
  id,
  register,
  errors,
}: SelectProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={id} {...register(name)}>
        {values.map((value, index) => {
          return <option value={value}>{text[index]}</option>;
        })}
      </select>
      {errors.name && <p>{errors.name.message}</p>}
    </div>
  );
};

export default Select;
