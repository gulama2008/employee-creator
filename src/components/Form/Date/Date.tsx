
const Date = ({ name, id, label, register, errors, required, type }) => (
  <>
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} type={type} {...register(name)} />
      {errors && errors[name]?.type === "required" && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <span className="error">{errors[name]?.message}</span>
      )}
    </div>
    <div>
      <label htmlFor="startDay">Day</label>
      <input type="text" id="startDay" {...register("startDate.day")} />
      {errors.startDate?.day && <p>{errors.startDate.day.message}</p>}
    </div>
    <div>
      <label htmlFor="startMonth">Month</label>
      <input type="text" id="startMonth" {...register("startDate.month")} />
      {errors.startDate?.month && <p>{errors.startDate.month.message}</p>}
    </div>
    <div>
      <label htmlFor="startYear">Year</label>
      <input type="text" id="startYear" {...register("startDate.year")} />
      {errors.startDate?.year && <p>{errors.startDate.year.message}</p>}
    </div>
  </>
);

export default Date;
