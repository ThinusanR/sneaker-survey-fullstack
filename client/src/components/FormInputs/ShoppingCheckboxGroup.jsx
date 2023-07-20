/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, ErrorMessage } from 'formik';

function ShoppingCheckboxGroup() {
  return (
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
        <Field type="checkbox" name="shoppingPreference" value="direct-brand" />
        Directly from the retail brand store (ex. Nike, Addidas, Puma, Reebok
        etc.)
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
  );
}
export default ShoppingCheckboxGroup;
