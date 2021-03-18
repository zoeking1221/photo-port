import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// configure the testing environment
afterEach(cleanup);

// create baseline test
describe('About component', () => {
    // First test - verifies that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    }) 
});

