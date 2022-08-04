import { useState } from 'react';
import BrandCheckboxGroup from './BrandCheckboxGroup';
import ShoeSizeBtnGroup from './ShoeSizeBtnGroup';
// make text input component
// make a gender radio component
// make sure for each component keeps track of state for each input

function SurveyForm() {
  const [nameInput, setName] = useState('');
  const [emailInput, setEmail] = useState('');
  const [ageInput, setAge] = useState('');
  const [genderInput, setGender] = useState('');
  console.log(genderInput);
  return (
    <main className="container">
      <form id="survey-form">
        <div className="input-group">
          <label className="form-label" htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={nameInput}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your Name"
              className="input-text"
              required
            />
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={emailInput}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter you Email"
              className="input-text"
              required
            />
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="age" className="form-label">
            Age
            <input
              type="text"
              name="age"
              id="age"
              value={ageInput}
              onChange={(event) => setAge(event.target.value)}
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
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(event) => setGender(event.target.value)}
              required
              className="intput-radio"
            />
          </label>
          <label className="form-label radio" htmlFor="female">
            Female
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(event) => setGender(event.target.value)}
              required
              className="intput-radio"
            />
          </label>
          <label className="form-label radio" htmlFor="other">
            Other
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={(event) => setGender(event.target.value)}
              required
              className="intput-radio"
            />
          </label>
        </div>
        <ShoeSizeBtnGroup />
        <BrandCheckboxGroup />
        <div className="input-group">
          <label className="form-label" htmlFor="shopping-pref">How do you prefer buying sneakers?</label>
          <select className="input-dropdown" name="shopping-pref">
            <option value="online">Online</option>
            <option value="in-store">In-store</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="input-group">
          <p>Where do you buy your sneakers? (check all that apply)</p>
          <label className="input-checkbox">
            <input type="checkbox" name="buying-pref" value="online-resell-market" />
            Online Reselling Market (ex. Stockx, Goat, Ebay & Grailed)
          </label>
          <label className="input-checkbox">
            <input type="checkbox" name="buying-pref" value="direct-brand" />
            Directly from the retail brand (ex. Nike/SNKRS, Addidas & Yeezysupply)
          </label>
          <label className="input-checkbox">
            <input type="checkbox" name="buying-pref" value="footwear-retailer" />
            Footwear Retailer (ex. Footlocker, Sportchek & Champs)
          </label>
          <label className="input-checkbox">
            <input type="checkbox" name="buying-pref" value="online-classifieds" />
            Online Classifieds (ex. Kijiji, Facebook Marketplace)
          </label>
          <label className="input-checkbox">
            <input type="checkbox" name="buying-pref" value="boutique-consignment" />
            Sneaker Boutique/Consignment Stores
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="fav-shoe">Tell us what your all time favourite shoe is?</label>
          <textarea name="fav-shoe" id="input-textarea" placeholder="Ex. Off-White Jordan 1 high UNC" />
        </div>
        <div id="btn-submit">
          <input type="submit" value="Submit" id="submit-btn" />
        </div>
      </form>
    </main>
  );
}
export default SurveyForm;
