import { Field, ErrorMessage } from 'formik';

function BrandCheckboxGroup() {
  const brands = ['Adidas', 'Converse', 'Puma', 'Vans', 'Air Jordan', 'Reebok', 'New Balance', 'Asics', 'Yeezy'];
  // todo:change brands so that it is passed in as props for this component
  return (
    <div className="input-group">
      <p>What is your favourite brand of sneakers? (check all that apply)</p>
      <ErrorMessage name="favouriteBrands" render={() => <div>Please check atleast one brand</div>} />
      {brands.map((brand) => (
        <label className="input-checkbox" key={brand}>
          <Field type="checkbox" name="favouriteBrands" key={brand} value={brand} />
          {brand}
        </label>
      ))}
      <label
        className="input-checkbox"
        htmlFor="favouriteBrands"
      >
        <Field type="checkbox" name="Field" value="Designer" />
        Designer Brands (ex. Gucci, Balenciaga & Louis Vuttion)
      </label>
    </div>
  );
}
export default BrandCheckboxGroup;
