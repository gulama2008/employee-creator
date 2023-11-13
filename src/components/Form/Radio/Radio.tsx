export interface RadioProps {
  name: string;
  label: string;
  id: string;
  value: string;
  register: any;
  errors: any;
}
const Radio = ({ name, label, id, value, register, errors }: RadioProps) => {
  return (
    <div>
      <input id={id} type="radio" {...register(name)} value={value}/>
      <label htmlFor={name}>{label}</label>
      {errors.name && <p>{errors.name.message}</p>}
    </div>
  );
};
export default Radio;
