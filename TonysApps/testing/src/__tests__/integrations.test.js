import React from 'react'
import { mount } from 'enzyme'
import Root from '../Root.js'
import App from '../components/App.js'
import moxios from 'moxios'

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched # 1'}, {name: 'Fetched # 2'}]
  })
})

afterEach(() => {
  moxios.uninstall();
})

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    )

    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => { //moxios.wait() is setTimeout() for arb amount of time
      wrapped.update()
      expect(wrapped.find('li').length).toEqual(2)
      done() //for use with setTimeout() or moxios.wait()
      wrapped.unmount()
    })


})
