import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import TodosList from "/component/TodosList";

test('renders without crashing', () => {
    const todoObj = [{ id: 1, title: "hello", done: false }];
    const div = document.createElement('div');
    ReactDOM.render(<TodosList todoList={todoObj} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('should be a div and a todo', () => {
    const todoObj = [{ id: 1, title: "hello", done: false }];
    const wrapper = shallow(<TodosList todoList={todoObj} />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('Todo').length).toEqual(1);

});