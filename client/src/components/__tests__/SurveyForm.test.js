import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SurveyForm from "../SurveyForm";
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import BrandCheckboxGroup from '../BrandCheckboxGroup';
import { act } from "react-dom/test-utils";
describe("Testing SurveyForm Component", () => {
  const setSubmit = jest.fn()
    const user = userEvent.setup();
    const submitForm = jest.fn();
    render(<SurveyForm setSubmit={setSubmit} />);
  test('test render brandcheckbox group', () => {
    // screen.debug(screen.getByText("Converse"));
    expect(screen.getByText("Converse")).toBeVisible();
  });

  test('test first name input',async () => {
    // const user = userEvent.setup();
    render(<SurveyForm setSubmit={setSubmit} />);
    const firstName = screen.getByPlaceholderText(/first name/i);
    await user.type(firstName, 'john');
    
    expect(firstName).toHaveValue('john');
  });
  test('test last name input',async () => {
    // const user = userEvent.setup();
    render(<SurveyForm setSubmit={setSubmit} />);
    const lName = screen.getByPlaceholderText(/last name/i);
    await user.type(lName, 'bob');
    
    expect(lName).toHaveValue('bob');
  });
  test('test email input',async () => {
    // const user = userEvent.setup();
    render(<SurveyForm setSubmit={setSubmit} />);
    const email = screen.getByPlaceholderText(/email/i);
    await user.type(email, 'test@gmail.com');
    
    expect(email).toHaveValue('test@gmail.com');
  });
  test('test age input',async () => {
    
    render(<SurveyForm setSubmit={setSubmit} />);
    
    const age = await screen.getByRole('spinbutton', {name: /age/i});
    await user.clear(age); // clear input since default is 1
    await user.type(age, '25');
    expect(age).toHaveValue(25);
    
  });
  test('test gender input',async () => {
    
    render(<SurveyForm setSubmit={setSubmit} />);
    
    const male = await screen.getByRole('radio', {name: 'Male'});
    await user.click(male);
    
    expect(male).toBeChecked();
    
  });
  test('test buying preference dropdown', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const select = await screen.getByRole('option', {name: 'Both'})
    await user.selectOptions(screen.getByRole('combobox'), select)
   
    
    expect(select.selected).toBe(true);
  });
  test('test sneaker shops checkbox with 1 input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    await act(async () => {
      const shop = await screen.getByTestId('store1');
      screen.debug(shop)
      await shop.click();
      expect(shop.checked).toEqual(true)
    })
    
    // await shop.click(shop);

    // expect(shop).toHaveValue('footwear-retailer');
    
    




  })
  // test('test render shoe size button group', async () => {
  //   // const thing = await screen.getAllByRole('button', {name: "shoeSize"})
  //   // screen.debug(thing);
  //   // render(
  //   //   <Formik>
  //   //     <Form>
  //   //       <BrandCheckboxGroup />
  //   //     </Form>
  //   //   </Formik>
  //   // )
   
  //   // console.log( screen.findByRole("button", {name: "shoeSize"}))
  //   // expect(screen.queryByTestId('shoe-sizes')).toBeVisible();
  // });
  // test("Rendering component", async () => {
  //   const setSubmit = jest.fn()
  //   const user = userEvent.setup();
  //   const submitForm = jest.fn();
  //   render(<SurveyForm setSubmit={setSubmit} />);
    
  //   // const submitForm = jest.spyOn(SurveyForm.submitForm, 'submitform')
  //   await user.type(screen.getByText(/first name/i), "John");
  //   await user.type(screen.getByText(/last name/i), "Doe");
  //   await user.type(screen.getByLabelText(/email/i), "fake1234@gmail.com");
  //   await user.click(screen.getByLabelText('Male'));
  //   await user.click(screen.getByText(/US M 3.5/i));
  //   await user.click(screen.getByText('Vans'));
  //   await user.click(screen.getByText('Online'));
  //   await user.click(screen.getByText(/footwear/i));
  //   await user.click(screen.getByText(/submit/i));
    
  //   await waitFor(() => 
  //     expect(submitForm).toHaveBeenCalledTimes(1)
  //     // expect(setSubmit).toHaveBeenCalledWith({
  //     //   firstName: "John",
  //     //   lastName: "Doe",
  //     //   email: "fake1234@gmail.com",
  //     //   gender: "MALE",
  //     //   favouriteBrands: 'Vans',

  //     // })
//   // const tree = render(
//     <Router> https://stackoverflow.com/questions/67653566/react-jest-testing-testinglibraryelementerror-unable-to-find-an-element
//     <MovieCard title="Batman" image="imagesrc"/>
//   </Router>
// )
  //   )
  // });
});
