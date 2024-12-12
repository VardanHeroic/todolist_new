import { useDispatch, useSelector } from "react-redux"
import { removeElement, startEditElement } from "./store/arraySlice"

export default function List() {
	const dispatch = useDispatch()
	const array = useSelector(state => state.arrayReducer.array)
	const editing = useSelector(state => state.arrayReducer.editing)
	return (
		!editing && (
			<ol>
				{array.map((element, i) => {
					return (
						<li id={i} key={i}>
							{element}
							<button onClick={() => dispatch(removeElement(i))}>REMOVE</button>
							<button onClick={() => dispatch(startEditElement(i))}>EDIT</button>
						</li>
					)
				})}
			</ol>
		)
	)
}
