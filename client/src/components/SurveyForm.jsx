// import { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import {AgeRangeInput,
  SneakerPairInput,
  BrandCheckboxGroup,
  ShoeSizeBtnGroup,

} from './FormInputs/index'

function SurveyForm({ setSubmit }) {
  const valdiationSchema = Yup.object({
    firstName: Yup.string().required('First Name is a required field'),
    lastName: Yup.string().required('Last Name is a required field'),
    email: Yup.string().email().required(),
    age:Yup.string().matches(/(ageRange1|ageRange2|ageRange3|ageRange4|ageRange5|ageRange6)/).required(),
    gender: Yup.string().matches(/(MALE|FEMALE|OTHER)/).required(),
    favouriteBrands: Yup.array().min(1).required(),
    buyingPreference: Yup.string().matches(/(ONLINE|INSTORE|BOTH)/).required(),
    favouriteSneaker: Yup.string(),
    shoppingPreference: Yup.array().min(1).required(),
    shoeSize: Yup.string().required(),
    maxPay: Yup.string().matches(/(payRange1|payRange2|payRange3|payRange4|payRange5|payRange6)/).required(),
    numOfShoes: Yup.string().matches(/(numShoeRange1|numShoeRange2|numShoeRange3|numShoeRange4|numShoeRange5|numShoeRange6)/).required(),

  });
  const intialValues = {
    firstName: '',
    lastName: '',
    email: '',
    age: 1,
    gender: '',
    shoeSize: '',
    favouriteBrands: [],
    buyingPreference: 'ONLINE',
    shoppingPreference: [],
    favouriteSneaker: '',
    maxPay: '',
    numOfShoes: '',
  };

  const submitForm = async (values) => {
    values.createdAt = new Date().toLocaleString();
    console.log(values)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values, null, 2),
    };
    console.log(values);
    fetch('http://localhost:8080/api/v1/surveys/', requestOptions)
      .then((response) => {
        if (response.ok && response.status === 201) {
          setSubmit(true);
        }
        console.log(response);
      })
      .catch(console.error);
    setSubmit(true);
  };
  return (
    <div className="container">
      <Formik
        initialValues={intialValues}
        validationSchema={valdiationSchema}
        onSubmit={async (values, { resetForm }) => {
          await submitForm(values);
          resetForm();
        }}
      >
        <Form className="survey-container">
          <div className="input-group-name">
            <div className="input-group">
              <label className="form-label" htmlFor="firstName">
                First Name
                <Field
                  name="firstName"
                  type="text"
                  className="input-text"
                  placeholder="Enter your first name"
                  required
                />
                <ErrorMessage name="firstName" component="div" />
              </label>
            </div>
            <div className="input-group">
              <label className="form-label" htmlFor="lastName">
                Last Name
                <Field
                  name="lastName"
                  type="text"
                  className="input-text"
                  placeholder="Enter your last name"
                  required
                />
                <ErrorMessage name="lastName" component="div" />
              </label>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="email" className="form-label">
              Email
              <Field
                type="email"
                name="email"
                id="email"
                // value={emailInput}
                // onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter you Email"
                className="input-text"
                required
              />
              <ErrorMessage name="email" component="div" />
            </label>
          </div>
          <AgeRangeInput/>
          
          
          <div className="input-group">
            <p>Select your Gender</p>
            <div className='row'>
            <label className="form-label" htmlFor="male">
              Male
              <Field
                type="radio"
                name="gender"
                id="male"
                value="MALE"
                // onChange={(event) => setGender(event.target.value)}
                required
                className="input-radio"
              />
            </label>
            <label className="form-label" htmlFor="female">
              Female
              <Field
                type="radio"
                name="gender"
                id="female"
                value="FEMALE"
                // onChange={(event) => setGender(event.target.value)}
                required
                className="input-radio"
              />
            </label>
            <label className="form-label" htmlFor="other">
              Other
              <Field
                type="radio"
                name="gender"
                id="other"
                value="OTHER"
                // onChange={(event) => setGender(event.target.value)}
                required
                className="input-radio"
              />
            </label>
            </div>
          </div>
          <ShoeSizeBtnGroup />
          {/* <div className="input-group">
            <label htmlFor="numShoes" className="form-label">
              How many pairs of sneakers do you own?
              <Field
                type="number"
                name="numShoes"
                id="numShoes"
                min="0"
                // value={ageInput}
                // onChange={(event) => setAge(event.target.value)}
                className="input-text"
                required
              />
            </label>
          </div> */}

          {/* <div className="input-group">
            <p>
            How many pairs of sneakers do you own?
            </p>
            <div className="row">
              <div className="column">
                <label className="form-label radio" htmlFor="numShoeRange1">
                  <Field
                    type="radio"
                    name="numOfShoes"
                    id="numShoeRange1"
                    value="numShoeRange1"
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
                    required
                    className="input-radio"
                  />
                  over 50+ pairs
                </label>
              </div>
            </div>
          </div> */}

          <BrandCheckboxGroup />
          <div className="input-group">
            <label className="form-label" htmlFor="shopping-pref">
              How do you prefer buying sneakers?
            </label>
            <Field
              className="input-dropdown"
              name="buyingPreference"
              as="select"
            >
              <option value="ONLINE">Online</option>
              <option value="INSTORE">In-store</option>
              <option value="BOTH">Both</option>
            </Field>
          </div>
          <div className="input-group" role="group">
            <p>Where do you shop for your sneakers? (check all that apply)</p>
            <ErrorMessage
              name="shoppingPreference"
              render={() => <div>Please check atleast one brand</div>}
            />
            <label className="input-checkbox">
              <Field
                type="checkbox"
                name="shoppingPreference"
                value="online-resell-market"
              />
              Online Reselling Market (ex. Stockx, Goat, Ebay & Grailed)
            </label>
            <label className="input-checkbox">
              <Field
                type="checkbox"
                name="shoppingPreference"
                value="direct-brand"
              />
              Directly from the retail brand store (ex. Nike, Addidas, Puma,
              Reebok etc.)
            </label>
            <label className="input-checkbox">
              <Field
                type="checkbox"
                name="shoppingPreference"
                value="footwear-retailer"
                data-testid="store1"
              />
              Footwear Retailer (ex. Footlocker, Sportchek & Champs)
            </label>
            <label className="input-checkbox">
              <Field
                type="checkbox"
                name="shoppingPreference"
                value="online-classifieds"
              />
              Online Classifieds (ex. Kijiji, Facebook Marketplace)
            </label>
            <label className="input-checkbox">
              <Field
                type="checkbox"
                name="shoppingPreference"
                value="boutique-consignment"
              />
              Sneaker Boutique/Consignment Stores
            </label>
            <label className="input-checkbox">
              <Field
                type="checkbox"
                name="shoppingPreference"
                value="sneaker-event"
              />
              Sneaker events(ex. sneaker conventions, swaps, tradeshows etc)
            </label>
          </div>
          {/* under $100 between 100 - 200 between 200 - 400 betwwen 400 - 600 over
          $600+ */}
          <div className="input-group">
            <p>
              What is the max amount of money you are willing to spend on a pair
              of sneaker's?
            </p>
            <div className="row">
              <div className="column">
                <label className="form-label radio" htmlFor="payRange1">
                  <Field
                    type="radio"
                    name="maxPay"
                    id="payRange1"
                    value="payRange1"
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
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
                    // onChange={(event) => setGender(event.target.value)}
                    required
                    className="input-radio"
                  />
                  Over $800+ CAD 
                </label>
              </div>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="favouriteSneaker">
              Tell us what your all time favourite shoe is?
            </label>
            <Field
              name="favouriteSneaker"
              as="textarea"
              id="input-textarea"
              placeholder="Ex. Off-White Jordan 1 high UNC"
            />
          </div>
          <div >
            <input type="submit" value="Submit" id="submit-btn" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
SurveyForm.propTypes = {
  setSubmit: PropTypes.func.isRequired,
};
export default SurveyForm;
