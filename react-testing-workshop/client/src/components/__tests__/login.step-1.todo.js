import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  const fakeUser = {username: 'Mr T', password: 'I pity the fool'}
  // 🐨 create a jest.fn() for your submit handler
  const handleSubmit = jest.fn()
  // 🐨 render the Login component to a div
  const div = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, div)
  // 🐨 get the field nodes
  const inputs = div.querySelectorAll('input')
  const usernameNode = inputs[0]
  const passwordNode = inputs[1]
  const formNode = div.querySelector('form')
  const submitButtonNode = div.querySelector('button')
  // 🐨 fill in the field values
  usernameNode.value = fakeUser.username
  passwordNode.value = fakeUser.password
  // Act
  // 🐨 submit the form:
  formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)
  expect(submitButtonNode.type).toBe('submit')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=tom.hendra@outlook.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
