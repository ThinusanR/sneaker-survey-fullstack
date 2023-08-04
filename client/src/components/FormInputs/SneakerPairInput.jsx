import { Field } from 'formik';

function SneakerPairInput() {
  return (
    <div className="input-group">
      <p>How many pairs of sneakers do you own?</p>
      <div className="row">
        <div className="column">
          <label className="form-label radio" htmlFor="numShoeRange1">
            <Field
              type="radio"
              name="numOfShoes"
              id="numShoeRange1"
              value="numShoeRange1"
              required
              className="input-radio"
            />
            Under 5 pairs
          </label>
          <label className="form-label radio" htmlFor="numShoeRange2">
            <Field
              type="radio"
              name="numOfShoes"
              id="numShoeRange2"
              value="numShoeRange2"
              required
              className="input-radio"
            />
            Between 5 - 15 pairs
          </label>
          <label className="form-label radio" htmlFor="numShoeRange3">
            <Field
              type="radio"
              name="numOfShoes"
              id="numShoeRange3"
              value="numShoeRange3"
              required
              className="input-radio"
            />
            Between 15 - 25 pairs
          </label>
        </div>
        <div className="column">
          <label className="form-label radio" htmlFor="numShoeRange4">
            <Field
              type="radio"
              name="numOfShoes"
              id="numShoeRange4"
              value="numShoeRange4"
              required
              className="input-radio"
            />
            Between 25 - 35 pairs
          </label>
          <label className="form-label radio" htmlFor="numShoeRange5">
            <Field
              type="radio"
              name="numOfShoes"
              id="numShoeRange5"
              value="numShoeRange5"
              required
              className="input-radio"
            />
            Between 35 - 50 pairs
          </label>
          <label className="form-label" htmlFor="numShoeRange6">
            <Field
              type="radio"
              name="numOfShoes"
              id="numShoeRange6"
              value="numShoeRange6"
              required
              className="input-radio"
            />
            over 50+ pairs
          </label>
        </div>
      </div>
    </div>
  );
}
export default SneakerPairInput;
