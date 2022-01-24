import { screen, render } from '@testing-library/react'
import App from './App'

test('Should render the header image', async () => {
  render(<App />)

  const heading = await screen.findByAltText(/Alchemy Logo/i)
  const name = screen.getByText(/meet/i)
  const actName = await screen.findByText(/Vonta/i)

  expect(heading).toBeInTheDocument()
  expect(name).toBeInTheDocument()
  expect(actName).toBeInTheDocument()
})
