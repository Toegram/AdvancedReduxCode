import React from 'react';
import { mount } from 'enzyme'
import CommentBox from '../CommentBox.js'

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in',() => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  })

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

})

it('clears the text area when submitted', () => {
  //FIRST we change the text area
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  })
  wrapped.update

  //THEN we submit the form to see if it gets cleared
  wrapped.find('form').simulate('submit', {
    target: { value: '' }
  })
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual('')

})
