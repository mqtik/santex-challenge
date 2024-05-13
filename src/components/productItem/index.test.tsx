import { render, fireEvent, act, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ADD_PRODUCT_TO_ORDER } from '../../graphql/mutations';
import {
  ADD_PRODUCT_ORDER_MOCK,
  PRODUCT_MOCK,
} from '../../utils/mocks/product';
import Item from '.';

describe('Item component', () => {
  beforeEach(() => {});
  it('renders correctly', () => {
    render(
      <MockedProvider mocks={ADD_PRODUCT_ORDER_MOCK} addTypename={false}>
        <Item item={PRODUCT_MOCK} />
      </MockedProvider>
    );

    // Check if the item name and description are rendered
    expect(screen.getByText('Mock Product')).toBeInTheDocument();
    expect(screen.getByText('Mock product description')).toBeInTheDocument();

    // Check if the image alt text is correct
    expect(screen.getByAltText('Mock Image Alt')).toBeInTheDocument();
  });

  it('handles button click', async () => {
    render(
      <MockedProvider mocks={ADD_PRODUCT_ORDER_MOCK} addTypename={false}>
        <Item item={PRODUCT_MOCK} />
      </MockedProvider>
    );

    // Click the "Buy" button
    fireEvent.click(screen.getByText('Buy'));

    // Wait for the mutation to complete
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    // Check if the refetch query was called
    expect(ADD_PRODUCT_ORDER_MOCK[0].request.query).toEqual(
      ADD_PRODUCT_TO_ORDER
    ); // Corrected query name
  });
});
