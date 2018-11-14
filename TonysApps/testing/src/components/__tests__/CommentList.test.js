import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList.js'
import Root from '../../Root.js'

let wrapped;
const initialState = { comments: ['Comment 1', 'Comment 2'] }

beforeEach( () => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})


  it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
  })

  it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
  })
