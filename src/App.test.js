import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, configure } from '@test/enzyme';


it('App should renders without crashing', () => {
  const component = shallow(<App/>);
  expect(component.exists()).toEqual(true);
});



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
