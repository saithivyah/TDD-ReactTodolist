import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import TodoInput from "/component/TodoItems";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoInput />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('should have input box in todoinput and their props is valid', () => {
    const wrap = mount(<TodoInput />);
    expect(wrap.find('input').length).toEqual(1);
    expect(wrap.find('button').length).toEqual(1);
    expect(wrap.find("input").prop("onKeyPress")).toEqual(wrap.instance().handleSubmit);

});