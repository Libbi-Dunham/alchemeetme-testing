import { screen, render } from '@testing-library/react'
import Header from './components/layout/Header'

const user = {}

test('Should render the header image', async () => {
  render(<Header user={user} />)

  const heading = screen.getByAltText(/Alchemy Logo/i)

  expect(heading).toBeInTheDocument()
})

// test('should render the profile name', async () => {
//   render(<Header />)

//   const heading = await screen.findByRole('paragraph', { name: /name:/i })
//   const name = 'Meet Vonta!'
// })
