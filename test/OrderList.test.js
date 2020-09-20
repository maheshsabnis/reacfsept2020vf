import React from 'react';

import {shallow,mount} from './../enzyme';

import OrderList from './../components/componentfotest/OrderList';

// the test suit

describe('React DOM Test Suit', ()=> {
    //the test case
    // wtite the test to check if the DOM has the element with class as 'empty'

    it('render no list but the class of element is "empty"', () => {
        const names =[];
        // check the shallow component for the DOM ans pass data to it
        // arrange and act
        const domWrapper = shallow(<OrderList options={names}/>);
        console.log(domWrapper.html())

        // assertion
        expect(domWrapper.find('.empty').exists()).toBe(true);

    });

    it('render  list but the class of element is "options"', () => {
        const names =['A', 'B', 'C'];
        // check the shallow component for the DOM ans pass data to it
        // arrange and act
        const domWrapper = shallow(<OrderList options={names}/>);
        console.log(domWrapper.html())

        // assertion
        expect(domWrapper.find('.options').exists()).toBe(true);

    });
});