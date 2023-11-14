import InputText from "../../components/Form/InputText/InputText";
import RadioAndCheckBox from "../../components/Form/RadioAndCheckBox/RadioAndCheckBox";
import Select from "../../components/Form/Select/Select";
import months from "../../data/months.json";
import monthsText from "../../data/months-text.json";

export interface PersonalDetailsFormProps {
  register: any;
  errors: any;
  formSubmit: (data: any) => any;
  handleSubmit: (formSubmit: any) => any;
}

const PersonalDetailsForm = ({
  register,
  errors,
  handleSubmit,
  formSubmit,
}: PersonalDetailsFormProps) => {
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <h1>Personal Information</h1>
      </div>
      <InputText
        name="firstName"
        label="First name"
        id="firstName"
        register={register}
        errors={errors}
      />
      <InputText
        name="middleName"
        label="Middle name (if applicable)"
        id="middleName"
        register={register}
        errors={errors}
      />
      <InputText
        name="lastName"
        label="Last name"
        id="lastName"
        register={register}
        errors={errors}
      />
      <div>Contact details</div>
      <InputText
        name="email"
        label="Email address"
        id="email"
        register={register}
        errors={errors}
      />
      <InputText
        name="phone"
        label="Mobile number"
        id="phone"
        register={register}
        errors={errors}
      />
      <InputText
        name="address"
        label="Residential address"
        id="address"
        register={register}
        errors={errors}
      />
      <div>Employee status</div>
      <div>
        <div>What is contract type?</div>
        <RadioAndCheckBox
          name="type"
          label="Permanent"
          id="permanent"
          type="radio"
          value="permanent"
          register={register}
          errors={errors}
        />
        <RadioAndCheckBox
          name="type"
          label="Contract"
          id="contract"
          type="radio"
          value="contract"
          register={register}
          errors={errors}
        />
      </div>

      <div>
        <div>Start date</div>
        <InputText
          name="startDate.day"
          label="Day"
          id="startDay"
          register={register}
          errors={errors}
        />
        <Select
          label="Month"
          name="startDate.month"
          values={months}
          text={monthsText}
          id="startMonth"
          register={register}
          errors={errors}
        />
        <InputText
          name="startDate.year"
          label="Year"
          id="startYear"
          register={register}
          errors={errors}
        />
      </div>
      <div>
        <div>Finish date</div>
        <InputText
          name="finishDate.day"
          label="Day"
          id="finishDay"
          register={register}
          errors={errors}
        />
        <Select
          label="Month"
          name="finishDate.month"
          values={months}
          text={monthsText}
          id="finishMonth"
          register={register}
          errors={errors}
        />
        <InputText
          name="finishDate.year"
          label="Year"
          id="finishYear"
          register={register}
          errors={errors}
        />
      </div>
      <RadioAndCheckBox
        name="onGoing"
        label="On going"
        id="onGoing"
        type="checkbox"
        value="true"
        register={register}
        errors={errors}
      />
      <div>
        <div>Is this on a full-time or part-time basis?</div>
        <RadioAndCheckBox
          name="basis"
          label="Full-time"
          id="fulltime"
          type="radio"
          value="fulltime"
          register={register}
          errors={errors}
        />
        <RadioAndCheckBox
          name="basis"
          label="Part-time"
          id="parttime"
          type="radio"
          value="parttime"
          register={register}
          errors={errors}
        />
      </div>
      <InputText
        name="hoursPerWeek"
        label="Hours per week"
        id="hoursPerWeek"
        register={register}
        errors={errors}
      />
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
