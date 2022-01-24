import { render, screen } from '@testing-library/react'
import App from '../../App'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<App />)

  const name = await screen.findByText(/Vonta/i)
  const header = await screen.findByAltText(/header/i)
  const avatar = await screen.findByAltText(/avatar/i)
  const motto = await screen.findByLabelText(/motto/i)
  const interests = await screen.findByText(/interests/i)
  const list = await screen.findAllByRole('listitem')

  expect(name).toBeInTheDocument()
  expect(header).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(motto).toBeInTheDocument()
  expect(interests).toBeInTheDocument()
  expect(list).toHaveLength(6)
})
