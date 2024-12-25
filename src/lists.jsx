import List from "./list.jsx"
import { useSelector } from "react-redux"

const Lists = () => {
	const array = useSelector(state => state.arrayReducer.array)
	const editing = useSelector(state => state.arrayReducer.editing)
	return (
		!editing && (
			<div>
				<List array={array.filter(task => !task.isDone)} name={"Pending"} />
				<List array={array.filter(task => task.isDone)} name={"Completed"} />
			</div>
		)
	)
}

export default Lists
