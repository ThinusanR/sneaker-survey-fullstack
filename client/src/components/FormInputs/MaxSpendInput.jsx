/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Field } from 'formik';

function MaxSpendInput() {
  return (
    <div className="input-group">
      <p>
        What is the max amount of money you are willing to spend on a pair of
        sneaker's?
      </p>
      <div className="row">
        <div className="column">
          <label className="form-label radio" htmlFor="payRange1">
            <Field
              type="radio"
              name="maxPay"
              id="payRange1"
              value="payRange1"
              required
              className="input-radio"
            />
            Under $100 CAD
          </label>
          <label className="form-label radio" htmlFor="payRange2">
            <Field
              type="radio"
              name="maxPay"
              id="payRange2"
              value="payRange2"
              required
              className="input-radio"
            />
            Between $100 - $200 CAD
          </label>
          <label className="form-label radio" htmlFor="payRange3">
            <Field
              type="radio"
              name="maxPay"
              id="payRange3"
              value="payRange3"
              required
              className="input-radio"
            />
            Between $200 - $400 CAD
          </label>
        </div>
        <div className="column">
          <label className="form-label radio" htmlFor="payRange4">
            <Field
              type="radio"
              name="maxPay"
              id="payRange4"
              value="payRange4"
              required
              className="input-radio"
            />
            Between $400 - $600 CAD
          </label>
          <label className="form-label radio" htmlFor="payRange5">
            <Field
              type="radio"
              name="maxPay"
              id="payRange5"
              value="payRange5"
              required
              className="input-radio"
            />
            Between $600 - $800 CAD
          </label>
          <label className="form-label radio" htmlFor="payRange6">
            <Field
              type="radio"
              name="maxPay"
              id="payRange6"
              value="payRange6"
              required
              className="input-radio"
            />
            Over $800+ CAD
          </label>
        </div>
      </div>
    </div>
  );
}
export default MaxSpendInput;
