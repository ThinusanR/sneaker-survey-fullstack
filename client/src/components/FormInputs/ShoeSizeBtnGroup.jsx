/* eslint-disable eqeqeq */
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { useState } from 'react';

function ShoeSizeBtnGroup() {
  const [btnClicked, setBtn] = useState({ clicked: false, key: '' });

  const shoeSizes = [
    'US M 3.5 / W 5',
    'US M 4 / W 5.5',
    'US M 4.5 / W 6',
    'US M 5 / W 6.5',
    'US M 5.5 / W 7',
    'US M 6 / W 7.5',
    'US M 6.5 /W 8',
    'US M 7 / W 8.5',
    'US M 7.5 / W 9',
    'US M 8 / W 9.5',
    'US M 8.5 / W 10',
    'US M 9 / W 10.5',
    'US M 9.5 / W 11',
    'US M 10 / W 11.5',
    'US M 10.5 / W 12',
    'US M 11 / W 12.5',
    'US M 11.5 / W 13',
    'US M 12 / W 13.5',
    'US M 12.5 / W 14',
    'US M 13 / W 14.5',
    'US M 13.5 / W 15',
    'US M 14 / W 15.5',
    'US M 14.5 / W 16',
    'US M 15 / W 16.5',
  ];
  // const [shoeSize, setSize] = useState('');
  // console.log(shoeSize);
  const formikProps = useFormikContext();
  return (
    <div className="input-group" data-testid="shoe-sizes">
      <p>what is your Shoe Size?</p>
      <ErrorMessage name="shoeSize" render={() => <div>Please select a shoe size </div>} />
      <Field
        // name="shoeSize"
        as="ul"
        id="btn-group"
      >
        { shoeSizes.map((shoe) => (
          <button
            className={btnClicked.clicked && btnClicked.key == shoe ? 'input-btn-selected' : 'input-btn'}
            type="button"
            onClick={(event) => {
              formikProps.setFieldValue('shoeSize', event.target.value);
              setBtn({ clicked: true, key: shoe });
            }}
            key={shoe}
            value={shoe}
            name="shoeSize"
          >
            {shoe}
          </button>
        )) }
      </Field>
    </div>
  );
}
// ShoeSizeBtnGroup.propTypes = {
//   setSize: PropTypes.func.isRequired,
// };
export default ShoeSizeBtnGroup;
