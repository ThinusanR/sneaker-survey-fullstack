/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, ErrorMessage } from 'formik';

function BrandCheckboxGroup() {
  const brands = [
    'Adidas',
    'Converse',
    'Puma',
    'Vans',
    'Air Jordan',
    'Reebok',
    'New Balance',
    'Asics',
    'Yeezy',
  ];

  return (
    <div className="input-group">
      <p>What is your favourite brand of sneakers? (check all that apply)</p>
      <ErrorMessage
        name="favouriteBrands"
        render={() => <div>Please check atleast one brand</div>}
      />
      {brands.map((brand) => (
        <label className="input-checkbox" key={brand}>
          <Field
            type="checkbox"
            name="favouriteBrands"
            key={brand}
            value={brand}
          />
          {brand}
        </label>
      ))}
      <label className="input-checkbox" key="Designer">
        <Field type="checkbox" name="favouriteBrands" value="Designer" />
        Designer Brands (ex. Gucci, Balenciaga & Louis Vuttion)
      </label>
    </div>
  );
}
export default BrandCheckboxGroup;
