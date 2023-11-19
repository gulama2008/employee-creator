import InputText from "../Form/InputText/InputText";
import RadioAndCheckBox from "../Form/RadioAndCheckBox/RadioAndCheckBox";
import Select from "../Form/Select/Select";
import months from "../../data/months.json";
import monthsText from "../../data/months-text.json";
import styles from "./PersonalDetailsForm.module.scss";
import Button from "react-bootstrap/Button";

export interface PersonalDetailsFormProps {
  register: any;
  errors: any;
  formSubmit: (data: any) => any;
  handleSubmit: (formSubmit: any) => any;
  handleCancel: () => any;
}

const PersonalDetailsForm = ({
  register,
  errors,
  handleSubmit,
  formSubmit,
  handleCancel,
}: PersonalDetailsFormProps) => {
  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div className={styles.personal_info}>
        <h4>Personal Information</h4>
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
      </div>
      <div className={styles.contact}>
        <h4>Contact details</h4>
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
      </div>
      <div className={styles.status}>
        <h3>Employee status</h3>
        <div>
          <h6>What is contract type?</h6>
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
          <h6>Start date</h6>
          <div className={styles.date}>
            <InputText
              name="startDateDay"
              label="Day"
              id="startDay"
              register={register}
              errors={errors}
            />
            <Select
              label="Month"
              name="startDateMonth"
              values={months}
              text={monthsText}
              id="startMonth"
              register={register}
              errors={errors}
            />
            <InputText
              name="startDateYear"
              label="Year"
              id="startYear"
              register={register}
              errors={errors}
            />
          </div>
        </div>

        <div>
          <h6>Finish date</h6>
          <div className={styles.date}>
            <InputText
              name="finishDateDay"
              label="Day"
              id="finishDay"
              register={register}
              errors={errors}
            />
            <Select
              label="Month"
              name="finishDateMonth"
              values={months}
              text={monthsText}
              id="finishMonth"
              register={register}
              errors={errors}
            />
            <InputText
              name="finishDateYear"
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
        </div>

        <div>
          <h6>Is this on a full-time or part-time basis?</h6>
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
      </div>

      <div className={styles.btn_container}>
        <Button variant="primary" className={styles.btn}>
          Save
        </Button>
        <Button
          variant="secondary"
          onClick={handleCancel}
          className={styles.btn}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
