import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  const initTimes = {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  render(<BookingForm availableTimes = {initTimes}/>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Verifies Initialize Times function', () => {
  const initTimes = {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  const dispatch = jest.fn();
  const submitForm = jest.fn();
  render(<BookingForm availableTimes = {initTimes} dispatch={dispatch} submitForm={submitForm}/>);
  const selectElement = screen.getByLabelText('Choose Time');
  selectElement.value = '17:00';
  expect(screen.getByLabelText('Choose Time').value).toBe('17:00');
});

test('Verifies Update Times function', () => {
  const initTimes = {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  render(<BookingForm availableTimes = {initTimes}/>);

  const selectDateElement = screen.getByLabelText('Choose Date');
  selectDateElement.value = '2024-09-09';

  const selectTimeElement = screen.getByLabelText('Choose Time');
  selectTimeElement.value = '18:00';

  expect(screen.getByLabelText('Choose Date').value).toBe('2024-09-09');
  expect(screen.getByLabelText('Choose Time').value).toBe('18:00');
});
