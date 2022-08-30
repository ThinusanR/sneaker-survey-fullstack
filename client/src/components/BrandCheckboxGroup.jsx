import { Field } from 'formik';

function BrandCheckboxGroup() {
  const brands = ['Adidas', 'Converse', 'Puma', 'Vans', 'Air Jordan', 'Reebok', 'New Balance', 'Asics', 'Yeezy'];
  // todo:change brands so that it is passed in as props for this component
  return (
    <div className="input-group">
      <p>What is your favourite brand of sneakers? (check all that apply)</p>
      {brands.map((brand) => (
        <label className="input-checkbox" htmlFor="favouriteBrands" key={brand}>
          <Field type="checkbox" name="favouriteBrands" value={brand} />
          {brand}
        </label>
      ))}
      <label
        className="input-checkbox"
        htmlFor="favouriteBrands"
      >
        <Field type="checkbox" name="brand" value="designer" />
        Designer Brands (ex. Gucci, Balenciaga & Louis Vuttion)
      </label>
    </div>
  );
}
export default BrandCheckboxGroup;
