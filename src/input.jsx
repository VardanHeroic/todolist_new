import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addElement, endEditElement } from "./store/arraySlice"

export default function Input() {
	const dispatch = useDispatch()
	const array = useSelector(state => state.arrayReducer.array)
	const editing = useSelector(state => state.arrayReducer.editing)
	const text = useRef("")

	useEffect(() => {
		if (editing) {
			text.current.value = array[editing]
		}
	}, [editing, array])

	return (
		<div>
			<input ref={text} onChange={e => (text.current.value = e.target.value)}></input>
			<button onClick={() => dispatch(editing ? endEditElement(text.current.value) : addElement(text.current.value))}>
				{editing ? "EDIT" : "ADD"}
			</button>
		</div>
	)
}
