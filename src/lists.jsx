import List from "./list.jsx"
import { useSelector } from "react-redux"

const Lists = () => {
	const array = useSelector(state => state.arrayReducer.array)
	const chosen = useSelector(state => state.arrayReducer.chosen)
	return (
		!chosen && (
			<div className="mt-6">
				<List array={array.filter(task => !task.isDone)} name={"Pending"} />
				<List array={array.filter(task => task.isDone)} name={"Completed"} />
			</div>
		)
	)
}

export default Lists
