import Counter from './Counter';
import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const incrementBtn = screen.getByRole('button');
        expect(incrementBtn).toBeInTheDocument();
    });
    test('renders count 0 in intial ', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        // console.log('COunt elem', countElement);
        // console.log('COunt elem:val', countElement.textContent);
        expect(countElement).toHaveTextContent('0');
        const incrementBtn = screen.getByRole('button');
        expect(incrementBtn).toBeInTheDocument();
    });
});
