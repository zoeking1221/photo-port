import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// configure testing environment
afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

// create a test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav />);
        // assert
        // test the emoji's accessibility features by querying the element by its aria-label
        expect(getByLabelText('camera')).toHaveTextContent('📸');       
    });
});

// test to see if links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        const { getByTestId } = render(<Nav />);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});
