import { render, screen } from '@testing-library/react';
import RatingForm from './rating-form';

const ratingChangeHandle = jest.fn();

describe('Component: RatingForm', () => {
  it('should render correctly', () => {

    render(
      <RatingForm onRate={ratingChangeHandle} rating={0} />
    );

    expect(screen.getByTestId('rating-form')).toBeInTheDocument();
  });

  it('should button has disabled status if radio button is not checked', () => {

    render(
      <RatingForm onRate={ratingChangeHandle} rating={0} />
    );

    const radioElements = screen.getAllByTestId('rating');
    radioElements.forEach((item: HTMLElement) => {
      expect(item).not.toBeChecked();
    });

  });
});
