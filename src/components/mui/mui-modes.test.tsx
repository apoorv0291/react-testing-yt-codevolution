// import { render, screen, logRoles } from '@testing-library/react';
import { render, screen, logRoles } from '../../test-utils';
import userEvent from '@testing-library/user-event';
// import { AppProviders } from '../../Providers/app-providers';
import { MuiMode } from './mui-mode';
// import { AppProviders } from '../../Providers/app-providers';

describe('Mui mode', () => {
    // test('render theme text correctly ', () => {
    //     render(<MuiMode />, {
    //         wrapper: AppProviders,
    //     });
    //     const headingEle = screen.getByRole('heading');
    //     expect(headingEle).toHaveTextContent('dark mode');
    // });
    test('render theme text correctly ', () => {
        render(<MuiMode />);
        const headingEle = screen.getByRole('heading');
        expect(headingEle).toHaveTextContent('dark mode');
    });
});
