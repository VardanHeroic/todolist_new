import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addElement, endEditElement } from "./store/arraySlice"
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid"

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
		<div className="grid gap-10 grid-cols-5 ">
			<input
				className="rounded-lg border-2 border-gray-400 col-span-4"
				ref={text}
				onChange={e => (text.current.value = e.target.value)}
			></input>
			<button
				className="rounded-lg p-1 bg-green-700 text-white col-span-1 text-center"
				onClick={() => dispatch(editing ? endEditElement(text.current.value) : addElement(text.current.value))}
			>
				{editing ? <PencilSquareIcon className="size-6 mx-auto" /> : <PlusIcon className="size-6 mx-auto" />}
			</button>
		</div>
	)
}
