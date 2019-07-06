import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('the app component', () => {
    it('should render correctly', () => {
        const component = renderer.create(<App />).toJSON();
        expect(component).toMatchSnapshot();
    })
})
