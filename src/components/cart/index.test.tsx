import { MockedProvider } from '@apollo/client/testing';
import { act, render, screen } from '@testing-library/react';
import Cart from '../cart';
import {
  ORDER_EMPTY_ORDER_MOCK,
  ORDER_ERROR_MOCK,
  ORDER_SUCCESS_MOCK,
} from '../../utils/mocks/orders';

describe('Order comp', () => {
  it('Renders component', async () => {
    render(
      <MockedProvider mocks={ORDER_SUCCESS_MOCK} addTypename={false}>
        <Cart />
      </MockedProvider>
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const totalAmount = await screen.findByText('Total: $1000.00');
    expect(totalAmount).toBeInTheDocument();
  });

  it('Should show loading on first render', () => {
    render(
      <MockedProvider mocks={ORDER_SUCCESS_MOCK} addTypename={false}>
        <Cart />
      </MockedProvider>
    );

    const loadingComponent = screen.getByTestId('loading');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('Informs error state', async () => {
    render(
      <MockedProvider mocks={ORDER_ERROR_MOCK} addTypename={false}>
        <Cart />
      </MockedProvider>
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    const errorMsg = screen.getByText('Something went wrong getting the order');
    expect(errorMsg).toBeInTheDocument();
  });

  it('Informs not active order available', async () => {
    render(
      <MockedProvider mocks={ORDER_EMPTY_ORDER_MOCK} addTypename={false}>
        <Cart />
      </MockedProvider>
    );

    const noOrderMsg = await screen.findByText('You did not place any orders.');
    expect(noOrderMsg).toBeInTheDocument();
  });
});
