import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>404</h1>
      <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
    </div>
  )
}
