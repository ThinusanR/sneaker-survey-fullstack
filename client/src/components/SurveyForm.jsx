// import { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import {
  AgeRangeInput,
  SneakerPairInput,
  BrandCheckboxGroup,
  ShoeSizeBtnGroup,
  ShoppingCheckboxGroup,
  MaxSpendInput,
} from './formInputs';

function SurveyForm({ setSubmit }) {
  const valdiationSchema = Yup.object({
    firstName: Yup.string().required('First Name is a required field'),
    lastName: Yup.string().required('Last Name is a required field'),
    email: Yup.string().email().required(),
    age: Yup.string()
      .matches(/(ageRange1|ageRange2|ageRange3|ageRange4|ageRange5|ageRange6)/)
      .required(),
    gender: Yup.string()
      .matches(/(MALE|FEMALE|OTHER)/)
      .required(),
    favouriteBrands: Yup.array().min(1).required(),
    buyingPreference: Yup.string()
      .matches(/(ONLINE|INSTORE|BOTH)/)
      .required(),
    favouriteSneaker: Yup.string(),
    shoppingPreference: Yup.array().min(1).required(),
    shoeSize: Yup.string().required(),
    maxPay: Yup.string()
      .matches(/(payRange1|payRange2|payRange3|payRange4|payRange5|payRange6)/)
      .required(),
    numOfShoes: Yup.string()
      .matches(
        /(numShoeRange1|numShoeRange2|numShoeRange3|numShoeRange4|numShoeRange5|numShoeRange6)/,
      )
      .required(),
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

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values, null, 2),
    };

    fetch('http://localhost:8080/api/v1/surveys/', requestOptions)
      .then((response) => {
        if (response.ok && response.status === 201) {
          setSubmit(true);
        }
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
          <AgeRangeInput />

          <div className="input-group">
            <p>Select your Gender</p>
            <div className="row">
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
          <SneakerPairInput />
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
          <ShoppingCheckboxGroup />
          <MaxSpendInput />
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
          <div>
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
