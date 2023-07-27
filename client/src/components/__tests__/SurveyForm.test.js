import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SurveyForm from '../SurveyForm';

const setSubmit = jest.fn();
const findFirstName = () => screen.getByPlaceholderText(/first name/i);
const findLastName = () => screen.getByPlaceholderText(/last name/i);
const findEmail = () => screen.getByPlaceholderText(/email/i);
const findAge = () => screen.getByRole('radio', { name: 'Between 10 - 20 years old' });
const findGender = () => screen.getByRole('radio', { name: 'Male' });
const findShoeSize = () => screen.getByRole('button', { name: 'US M 9.5 / W 11' });
const findShoePairs = () => screen.getByRole('radio', { name: 'Between 5 - 15 pairs' });
const findShoeBrands = () => screen.getByRole('checkbox', { name: 'Vans' });
const findBuyPref = () => screen.getByRole('option', { name: 'Both' });
const findShopPref = () => screen.getByRole('checkbox', {
  name: 'Directly from the retail brand store (ex. Nike, Addidas, Puma, Reebok etc.)',
});
const findMaxSpend = () => screen.getByRole('radio', { name: 'Between $200 - $400 CAD' });
const findFavShoe = () => screen.getByPlaceholderText('Ex. Off-White Jordan 1 high UNC');

describe('Test SurveyForm Input Components Rendering', () => {
  test('First Name Input Text', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findFirstName()).toBeVisible();
  });
  test('Last Name Input Text', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findLastName()).toBeVisible();
  });
  test('Email Input', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findEmail()).toBeVisible();
  });
  test('Age Range Input Radio', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findAge()).toBeVisible();
  });
  test('Gender Input Radio', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findGender()).toBeVisible();
  });
  test('Shoe Size Input Button Group', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findShoeSize()).toBeVisible();
  });
  test('Shoe Pairs Input Radio', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findShoePairs()).toBeVisible();
  });
  test('Shoe Brands Input Checkbox', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findShoeBrands()).toBeVisible();
  });
  test('Buying Preference Input Select', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findBuyPref()).toBeVisible();
  });
  test('Shopping Preference Input Select', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findShopPref()).toBeVisible();
  });
  test('Max Spend Input Select', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findMaxSpend()).toBeVisible();
  });
  test('Favourite Shoe Input Checkbox', () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    expect(findFavShoe()).toBeVisible();
  });
});

describe('Test SurveyForm inputs with values', () => {
  const user = userEvent.setup();
  test('First Name Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    const firstName = findFirstName();
    await user.type(firstName, 'john');

    expect(firstName).toHaveValue('john');
  });

  test('Last Name Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    const lastName = findLastName();
    await user.type(lastName, 'bob');

    expect(lastName).toHaveValue('bob');
  });
  test('Email Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    const email = findEmail();
    await user.type(email, 'test@gmail.com');

    expect(email).toHaveValue('test@gmail.com');
  });
  test('Age Range Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    const age = findAge();
    await user.click(age);

    expect(age).toBeChecked();
  });
  test('Gender Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    const gender = findGender();
    await user.click(gender);
    expect(gender).toBeChecked();
  });
  test('Shoe Size Button Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);
    const shoeSize = findShoeSize();
    await user.click(shoeSize);

    expect(shoeSize).toHaveClass('input-btn-selected');
  });
  test('Pairs of Sneakers range input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const PairsOfSneakers = findShoePairs();
    await user.click(PairsOfSneakers);

    expect(PairsOfSneakers).toBeChecked();
  });
  test('Favourite Brands single input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const favBrand = findShoeBrands();
    await user.click(favBrand);

    expect(favBrand).toBeChecked();
  });
  test('Favourite Brands multiple inputs', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const favBrand1 = screen.getByRole('checkbox', { name: 'Vans' });
    const favBrand2 = screen.getByRole('checkbox', { name: 'Adidas' });
    const favBrand3 = screen.getByRole('checkbox', { name: 'Air Jordan' });

    await user.click(favBrand1);
    await user.click(favBrand2);
    await user.click(favBrand3);

    expect(favBrand1).toBeChecked();
    expect(favBrand2).toBeChecked();
    expect(favBrand3).toBeChecked();
  });

  test('Buying preference dropdown input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const select = findBuyPref();
    await user.selectOptions(screen.getByRole('combobox'), select);

    expect(select.selected).toBe(true);
  });

  test('Sneaker shopping single input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const favBrand = findShoeBrands();
    await user.click(favBrand);

    expect(favBrand).toBeChecked();
  });
  test('Sneaker Shopping multiple inputs', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const favBrand1 = screen.getByRole('checkbox', {
      name: 'Sneaker Boutique/Consignment Stores',
    });
    const favBrand2 = screen.getByRole('checkbox', {
      name: 'Online Classifieds (ex. Kijiji, Facebook Marketplace)',
    });
    const favBrand3 = screen.getByRole('checkbox', {
      name: 'Online Reselling Market (ex. Stockx, Goat, Ebay & Grailed)',
    });

    await user.click(favBrand1);
    await user.click(favBrand2);
    await user.click(favBrand3);

    expect(favBrand1).toBeChecked();
    expect(favBrand2).toBeChecked();
    expect(favBrand3).toBeChecked();
  });
  test('Max Spend per shoe input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const maxSpent = findMaxSpend();
    await user.click(maxSpent);

    expect(maxSpent).toBeChecked();
  });
  test('Favourite Sneaker Input', async () => {
    render(<SurveyForm setSubmit={setSubmit} />);

    const favSneaker = findFavShoe();
    await user.type(favSneaker, 'Jordan 4 Bred');

    expect(favSneaker).toHaveValue('Jordan 4 Bred');
  });
});
describe('test form submission', () => {
  test('Rendering component', async () => {
    const user = userEvent.setup();

    render(<SurveyForm setSubmit={setSubmit} />);

    await user.type(screen.getByPlaceholderText(/first name/i), 'john');
    await user.type(screen.getByPlaceholderText(/last name/i), 'bob');
    await user.type(screen.getByPlaceholderText(/email/i), 'test@gmail.com');
    await user.click(
      screen.getByRole('radio', { name: 'Between 10 - 20 years old' }),
    );
    await user.click(screen.getByRole('radio', { name: 'Male' }));
    await user.click(screen.getByRole('button', { name: 'US M 9.5 / W 11' }));
    await user.click(
      screen.getByRole('radio', { name: 'Between 5 - 15 pairs' }),
    );
    await user.click(screen.getByRole('checkbox', { name: 'Vans' }));
    await user.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Both' }),
    );
    await user.click(
      screen.getByRole('checkbox', {
        name: 'Directly from the retail brand store (ex. Nike, Addidas, Puma, Reebok etc.)',
      }),
    );
    await user.click(
      screen.getByRole('radio', { name: 'Between $200 - $400 CAD' }),
    );
    await user.type(
      screen.getByPlaceholderText('Ex. Off-White Jordan 1 high UNC'),
      'Jordan 4 Bred',
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(setSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
