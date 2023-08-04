import { Field } from 'formik';

function AgeRangeInput() {
  return (
    <div className="input-group">
      <p>Select your age range</p>
      <div className="row">
        <div className="column">
          <label className="form-label radio" htmlFor="ageRange1">
            <Field
              type="radio"
              name="age"
              id="ageRange1"
              value="ageRange1"
              required
              className="input-radio"
            />
            Under 10 years old
          </label>
          <label className="form-label radio" htmlFor="ageRange2">
            <Field
              type="radio"
              name="age"
              id="ageRange2"
              value="ageRange2"
              required
              className="input-radio"
            />
            Between 10 - 20 years old
          </label>
          <label className="form-label radio" htmlFor="ageRange3">
            <Field
              type="radio"
              name="age"
              id="ageRange3"
              value="ageRange3"
              required
              className="input-radio"
            />
            Between 20 - 30 years old
          </label>
        </div>
        <div className="column">
          <label className="form-label radio" htmlFor="ageRange4">
            <Field
              type="radio"
              name="age"
              id="ageRange4"
              value="ageRange4"
              required
              className="input-radio"
            />
            Between 30 - 45 years old
          </label>
          <label className="form-label radio" htmlFor="ageRange5">
            <Field
              type="radio"
              name="age"
              id="ageRange5"
              value="ageRange5"
              required
              className="input-radio"
            />
            Between 45 - 60 years old
          </label>
          <label className="form-label" htmlFor="ageRange6">
            <Field
              type="radio"
              name="age"
              id="ageRange6"
              value="ageRange6"
              required
              className="input-radio"
            />
            60 years and older
          </label>
        </div>
      </div>
    </div>
  );
}
export default AgeRangeInput;
