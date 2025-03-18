import SignIn from '@/components/Signin'
import useAuth from '@/hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const auth = useAuth()
  const location = useLocation()
	const navigate = useNavigate()

  const from = location.state?.from

  const handleClickSubmit = (data: ILoginFormData) => {
    auth.login(data.login, () => {
      navigate(from, {
        replace: true,
      })
    })
  }

  return (
    <div>
      <SignIn onSubmit={handleClickSubmit} />
    </div>
  )
}
