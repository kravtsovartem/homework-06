import { Button, TextInput } from '@mantine/core'
import { useRef, useState } from 'react'
import { MdAlternateEmail, MdPassword } from 'react-icons/md'

interface ISigninProps {
  onSubmit: (value: ILoginFormData) => void
}

const loginForm: IFormInputs[] = [
  {
    name: 'login',
    type: 'text',
    label: 'Логин',
    placeholder: 'Введите логин',
    icon: <MdAlternateEmail />,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
    icon: <MdPassword />,
  },
]

const SignIn = ({ onSubmit }: ISigninProps) => {
  const formRef = useRef<HTMLFormElement>(null)

  const inputs = useRef<ILoginFormData>({
    login: '',
    password: '',
  })

  const [isSumbitError, setSumbitError] = useState(false)

  const handleChangeInput = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    inputs.current = {
      ...inputs.current,
      [key]: e.target.value,
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let isError = false

    loginForm.forEach((item) => {
      if (item.errorRule && item.errorRule(inputs.current[item.name])) {
        isError = true
      }
    })

    setSumbitError(isError)

    if (!isError) {
      onSubmit(inputs.current)
      e.currentTarget.reset()
    }
  }

  return (
    <div>
      <h1>Авторизация</h1>

      <form ref={formRef} onSubmit={handleSubmit}>
        {loginForm.map((item) => (
          <TextInput
            key={item.name}
            name={item.name}
            placeholder={item.placeholder}
            label={item.label}
            description={item.description}
            error={
              isSumbitError && item.errorRule && item.errorRule(inputs.current[item.name])
                ? item.errorText
                : ''
            }
            variant="default"
            radius="xs"
            size="xs"
            disabled={false}
            withAsterisk
            type={item.type}
            icon={item.icon}
            onChange={(e) => handleChangeInput(item.name, e)}
            required
          />
        ))}

        <p>
          <Button type="submit">Войти</Button>
        </p>
      </form>
    </div>
  )
}

export default SignIn
