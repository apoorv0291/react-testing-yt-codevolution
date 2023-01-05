import Counter from './Counter';
import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const incrementBtn = screen.getByRole('button', { name: /increment/i });
        expect(incrementBtn).toBeInTheDocument();
    });
    test('renders count 0 in intial ', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        // console.log('COunt elem', countElement);
        // console.log('COunt elem:val', countElement.textContent);
        expect(countElement).toHaveTextContent('0');
        const incrementBtn = screen.getByRole('button', { name: /increment/i });
        expect(incrementBtn).toBeInTheDocument();
        // userEvent.cl
    });
    test('increase count on click', async () => {
        // userEvent.setup();
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        // console.log('COunt elem', countElement);
        // console.log('COunt elem:val', countElement.textContent);
        expect(countElement).toHaveTextContent('0');
        const incrementBtn = screen.getByRole('button', { name: /increment/i });
        expect(incrementBtn).toBeInTheDocument();
        userEvent.click(incrementBtn);
        userEvent.click(incrementBtn);
        userEvent.dblClick(incrementBtn);
        userEvent.hover(incrementBtn);
        userEvent.unhover(incrementBtn);
        expect(screen.getByRole('heading')).toHaveTextContent('4');
    });
    test('tpye input, renders count 10 after clicking set', () => {
        render(<Counter />);
        const inputEle = screen.getByRole('spinbutton');
        userEvent.type(inputEle, '10');
        expect(screen.getByRole('spinbutton')).toHaveValue(10);
        const setBtn = screen.getByRole('button', { name: /Set Amount/i });
        userEvent.click(setBtn);
        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent('10');
    });
    test('elemenets are focussed in the right order', () => {
        render(<Counter />);
        const inputEle = screen.getByRole('spinbutton');
        const setBtn = screen.getByRole('button', { name: /Set Amount/i });
        const incrementBtn = screen.getByRole('button', { name: /increment/i });
        userEvent.tab();
        expect(incrementBtn).toHaveFocus();
        userEvent.tab();
        expect(inputEle).toHaveFocus();
        userEvent.tab();
        expect(setBtn).toHaveFocus();
    });
});
