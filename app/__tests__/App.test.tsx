import * as React from 'react'
import App from '../App'

import * as renderer from 'react-test-renderer'

describe('Testing App component', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON()
    expect(rendered).toMatchSnapshot()
    expect(rendered).toBeTruthy()
  })
})