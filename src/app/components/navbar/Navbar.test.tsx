import { render, screen } from '@testing-library/react';
import Home from '../../page';
import UserMenu from './UserMenu';
import Search from './Search';

describe('Navbar', () => {
  it('Should display welcome message', () => {
    render(<Home />);
    const hello = screen.getByText('Hello Airbnb!');
    expect(hello).toBeInTheDocument();
  });

  it('Should show header CTA', () => {
    render(<UserMenu />);
    const logo = screen.getByText('Airbnb your home');
    expect(logo).toBeInTheDocument();
  });

  it('Should show search menu', () => {
    render(<Search />);
    const search = screen.getByText('Anywhere');
    expect(search).toBeInTheDocument();
  });
});
