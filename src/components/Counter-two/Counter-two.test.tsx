import { render, screen } from '@testing-library/react';
import { CounterTwo } from './Counter-two';
import userEvent from '@testing-library/user-event';

describe('Counter two', () => {
    test('renders correctly', () => {
        render(<CounterTwo count={0} />);
        const textEle = screen.getByText('Counter two');
        expect(textEle).toBeInTheDocument();
    });
    test('handlers are called', () => {
        const incremenentHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(
            <CounterTwo
                count={0}
                handleIncrement={incremenentHandler}
                handleDecrement={decrementHandler}
            />
        );
        const incBtn = screen.getByRole('button', { name: /increment/i });
        const decBtn = screen.getByRole('button', { name: /decrement/i });
        expect(incBtn).toBeInTheDocument();
        expect(decBtn).toBeInTheDocument();
        userEvent.click(incBtn);
        userEvent.click(decBtn);
        expect(incremenentHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    });
});
