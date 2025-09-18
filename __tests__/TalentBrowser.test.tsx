
import { render, screen } from '@testing-library/react';
import TalentBrowser from '../components/TalentBrowser';

test('renders talent browser', () => {
  render(<TalentBrowser />);
  const heading = screen.getByText(/Talent Browser/i);
  expect(heading).toBeInTheDocument();
});
