import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
