import { Skills } from './Skills';
import { render, screen, logRoles } from '@testing-library/react';
// import

describe('Skills Comp', () => {
    const skills = ['html', 'css'];

    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });
    test('renders list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    });
    test('render login button', () => {
        render(<Skills skills={skills} />);
        const button = screen.getByRole('button', { name: /login/i });
        expect(button).toBeInTheDocument();
        const startbutton = screen.getByRole('button', { name: /login/i });
    });
    test('start learning button is not rendered', () => {
        render(<Skills skills={skills} />);
        const learningButton = screen.queryByRole('button', {
            name: /start learning/i,
        });
        expect(learningButton).not.toBeInTheDocument();
    });
    test('start learning btn is eventually displayed', async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        // screen.debug();
        const learningButton = await screen.findByRole(
            'button',
            {
                name: /start learning/i,
            },
            { timeout: 2000 }
        );
        // screen.debug();
        expect(learningButton).toBeInTheDocument();
    });
});
