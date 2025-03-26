import { NavLink } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

interface IListItem {
  name: string
  active?: boolean
  to?: string
}

function ListItem({ name, active, to }: IListItem) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (!to) return

    navigate(to)
  }

  return <NavLink active={active} onClick={handleClick} label={name} />
}

export default ListItem
