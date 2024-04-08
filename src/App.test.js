import { getByLabelText, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  const initTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  render(<BookingForm availableTimes = {initTimes}/>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Verifies Initialize Times function', () => {
  const initTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  render(<BookingForm availableTimes = {initTimes}/>);
  const selectElement = screen.getByLabelText('Choose Time');
  console.log(selectElement);
  //expect(selectElement.getByRole('option', { value: '17:00' }).selected).toBe(true)
});

test('Verifies Update Times function', () => {
  const initTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  render(<BookingForm availableTimes = {initTimes}/>);
  const selectElement = screen.getByLabelText('Choose Time');
  console.log(selectElement);
  //expect(selectElement.getByRole('option', { value: '17:00' }).selected).toBe(true)
});
