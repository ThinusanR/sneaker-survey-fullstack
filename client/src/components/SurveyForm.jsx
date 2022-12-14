// import { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import BrandCheckboxGroup from './BrandCheckboxGroup';
import ShoeSizeBtnGroup from './ShoeSizeBtnGroup';

function SurveyForm({ setSubmit }) {
  // const [shoeSize, setSize] = useState('');
  const valdiationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.number().positive().integer().required(),
    gender: Yup.string().matches(/(MALE|FEMALE|OTHER)/).required(),
    favouriteBrands: Yup.array().min(1).required(),
    buyingPreference: Yup.string().matches(/(ONLINE|INSTORE|BOTH)/).required(),
    favouriteSneaker: Yup.string(),
    shoppingPreference: Yup.array().min(1).required(),
    shoeSize: Yup.string().required(),
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
  };

  const onSubmit = (values) => {
    // if (shoeSize === '') {
    //   return alert('shoesize');
    // }
    // values.shoeSize = shoeSize;
    values.createdAt = new Date().toLocaleString();
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
    <main className="container">
      <Formik
        initialValues={intialValues}
        validationSchema={valdiationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        <Form className="survey-form">
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
          <div className="input-group">
            <label htmlFor="age" className="form-label">
              Age
              <Field
                type="number"
                name="age"
                id="age"
                min="1"
                max="100"
                // value={ageInput}
                // onChange={(event) => setAge(event.target.value)}
                placeholder="Age"
                className="input-text"
                required
              />
            </label>
          </div>
          <div className="input-group">
            <p>Select your Gender</p>
            <label className="form-label radio" htmlFor="male">
              Male
              <Field
                type="radio"
                name="gender"
                id="male"
                value="MALE"
                // onChange={(event) => setGender(event.target.value)}
                required
                className="intput-radio"
              />
            </label>
            <label className="form-label radio" htmlFor="female">
              Female
              <Field
                type="radio"
                name="gender"
                id="female"
                value="FEMALE"
                // onChange={(event) => setGender(event.target.value)}
                required
                className="intput-radio"
              />
            </label>
            <label className="form-label radio" htmlFor="other">
              Other
              <Field
                type="radio"
                name="gender"
                id="other"
                value="OTHER"
                // onChange={(event) => setGender(event.target.value)}
                required
                className="intput-radio"
              />
            </label>
          </div>
          <ShoeSizeBtnGroup />
          <BrandCheckboxGroup />
          <div className="input-group">
            <label className="form-label" htmlFor="shopping-pref">How do you prefer buying sneakers?</label>
            <Field className="input-dropdown" name="buyingPreference" as="select">
              <option value="ONLINE">Online</option>
              <option value="INSTORE">In-store</option>
              <option value="BOTH">Both</option>
            </Field>
          </div>
          <div className="input-group">
            <p>Where do you shop for your sneakers? (check all that apply)</p>
            <ErrorMessage name="shoppingPreference" render={() => <div>Please check atleast one brand</div>} />
            <label className="input-checkbox" htmlFor="shoppingPreference">
              <Field type="checkbox" name="shoppingPreference" value="online-resell-market" />
              Online Reselling Market (ex. Stockx, Goat, Ebay & Grailed)
            </label>
            <label className="input-checkbox" htmlFor="shoppingPreference">
              <Field type="checkbox" name="shoppingPreference" value="direct-brand" />
              Directly from the retail brand (ex. Nike/SNKRS, Addidas & Yeezysupply)
            </label>
            <label className="input-checkbox" htmlFor="shoppingPreference">
              <Field type="checkbox" name="shoppingPreference" value="footwear-retailer" />
              Footwear Retailer (ex. Footlocker, Sportchek & Champs)
            </label>
            <label className="input-checkbox" htmlFor="shoppingPreference">
              <Field type="checkbox" name="shoppingPreference" value="online-classifieds" />
              Online Classifieds (ex. Kijiji, Facebook Marketplace)
            </label>
            <label className="input-checkbox" htmlFor="shoppingPreference">
              <Field type="checkbox" name="shoppingPreference" value="boutique-consignment" />
              Sneaker Boutique/Consignment Stores
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="favouriteSneaker">Tell us what your all time favourite shoe is?</label>
            <Field name="favouriteSneaker" as="textarea" id="input-textarea" placeholder="Ex. Off-White Jordan 1 high UNC" />
          </div>
          <div id="btn-submit">
            <input type="submit" value="Submit" id="submit-btn" />
          </div>
        </Form>
      </Formik>
    </main>
  );
}
SurveyForm.propTypes = {
  setSubmit: PropTypes.func.isRequired,
};
export default SurveyForm;
