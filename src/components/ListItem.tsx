import { NavLink } from "@mantine/core"
import { useNavigate } from "react-router-dom"

interface IListItem {
	id: number
	name: string
}

function ListItem({ id, name }: IListItem) {

	const navigate = useNavigate()

	return <NavLink onClick={() => navigate(`/note/${id}`)} label={name} />
	 
}

export default ListItem