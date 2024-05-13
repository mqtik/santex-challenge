import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render Footer', async () => {
    render(<Footer />);

    const logo = screen.getByAltText('Santex Logo');
    expect(logo).toBeInTheDocument();
  });
});
