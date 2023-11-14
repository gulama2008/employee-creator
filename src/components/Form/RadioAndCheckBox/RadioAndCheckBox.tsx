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
      <input id={id} type={ type} {...register(name)} value={value} />
      <label htmlFor={name}>{label}</label>
      {errors.name && <p>{errors.name.message}</p>}
    </div>
  );
};
export default RadioAndCheckBox;
