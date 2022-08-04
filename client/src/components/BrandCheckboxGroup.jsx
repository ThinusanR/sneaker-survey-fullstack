function BrandCheckboxGroup() {
  const brands = ['Adidas', 'Converse', 'Puma', 'Vans', 'Air Jordan', 'Reebok', 'New Balance', 'Asics', 'Yeezy'];
  return (
    <div className="input-group">
      <p>What is your favourite brand of sneakers? (check all that apply)</p>
      {brands.map((brand) => (
        <label className="input-checkbox" htmlFor={brand} key={brand}>
          <input type="checkbox" name={brand} value={brand} />
          {brand}
        </label>
      ))}
      <label className="input-checkbox" htmlFor="brand">
        <input type="checkbox" name="brand" value="designer" />
        Designer Brands (ex. Gucci, Balenciaga & Louis Vuttion)
      </label>
    </div>
  );
}
export default BrandCheckboxGroup;
