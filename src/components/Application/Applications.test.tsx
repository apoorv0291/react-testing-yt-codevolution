import Application from './Application';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import {

describe('Application', () => {
    test('redners correctly', () => {
        render(<Application />);
        const pageHeading = screen.getByRole('heading', {
            name: 'Job application form',
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            name: 'Section 1',
            level: 2,
        });
        expect(sectionHeading).toBeInTheDocument();

        const name = screen.getByRole('textbox', { name: 'Namee' });
        expect(name).toBeInTheDocument();

        const findNameByLabel = screen.getByLabelText('Namee', {
            selector: 'input',
        });
        expect(findNameByLabel).toBeInTheDocument();

        const bio = screen.getByRole('textbox', { name: 'Bio' });
        expect(bio).toBeInTheDocument();

        const jobLocation = screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();
        const term = screen.getByRole('checkbox');
        expect(term).toBeInTheDocument();
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();

        const terms2 = screen.getByLabelText('I agree to all t and c');
        expect(terms2).toBeInTheDocument();

        const name3 = screen.getByPlaceholderText('FullName');
        expect(name3).toBeInTheDocument();
        const allFieldsMandatText = screen.getByText('All forms are mandatory');
        expect(allFieldsMandatText).toBeInTheDocument();
        const name4 = screen.getByDisplayValue('Vishwash');
        expect(name4).toBeInTheDocument();
        const imageEle = screen.getByAltText('a person with lap');
        expect(imageEle).toBeInTheDocument();
        const closeEle = screen.getByTitle('Close');
        expect(closeEle).toBeInTheDocument();
        const divCustome = screen.getByTestId('testDiv');
        expect(divCustome).toBeInTheDocument();
        const terms3 = screen.getByLabelText(/I agree/i);
        expect(terms3).toBeInTheDocument();
    });
});
