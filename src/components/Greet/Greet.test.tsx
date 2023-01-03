import { render, screen } from '@testing-library/react';
import Greet from './Greet';

/**
 * Greet should render hello and if a name is passed then should
 * render hello {name}
 */
describe('Gree Test', () => {
    test('Check greet | greet renders correctly', () => {
        render(<Greet />);
        const helloText = screen.getByText(/hello/i);
        expect(helloText).toBeInTheDocument();
    });
    describe('Renders Corectly', () => {
        test('Greet ss dd renders correctly with a name', () => {
            render(<Greet name="apoorv" />);
            const helloText = screen.getByText(/hello apoorv/i);
            expect(helloText).toBeInTheDocument();
        });
    });
});
