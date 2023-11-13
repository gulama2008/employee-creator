export interface TextInputProps{ 
    name: string;
    label: string;
    id: string;
    register: any;
    errors: any;
}

const Input = ({ name, label, id, register, errors }:TextInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={id} type='text' {...register(name)} />
      {errors.name && <p>{errors.name.message}</p>}
    </div>
  );
};

export default Input