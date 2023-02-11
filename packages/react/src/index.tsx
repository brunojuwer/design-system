import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  background: '$gray400',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return (
    <h1>
      <Button>Teste</Button>
    </h1>
  )
}
