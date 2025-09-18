
import { render, screen } from '@testing-library/react';
import ApplyForm from '../components/ApplyForm';
import { Talent } from '../types/talent';

const talent: Talent = {
  id: 1,
  name: 'John Doe',
  skills: ['React', 'TypeScript'],
  experience: 5,
};

test('renders apply form', () => {
  render(<ApplyForm talent={talent} onBack={() => {}} />);
  const heading = screen.getByText(/Apply for John Doe/i);
  expect(heading).toBeInTheDocument();
});
