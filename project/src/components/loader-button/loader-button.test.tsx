import {render, screen} from '@testing-library/react';
import LoaderButton from './loader-button';

describe('Component: LoaderButton', () => {
  it('should render correctly', () => {
    render(<LoaderButton />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
