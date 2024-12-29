import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSubTask, addTask, editTask } from "./store/arraySlice"
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid"

export default function Input() {
	const dispatch = useDispatch()
	const array = useSelector(state => state.arrayReducer.array)
	const chosen = useSelector(state => state.arrayReducer.chosen)
	const status = useSelector(state => state.arrayReducer.status)
	const text = useRef("")
	const handleClick = useRef(addTask(text.current.value))

	useEffect(() => {
		if (status === "editing") {
			text.current.value = array.recursiveFind(chosen).text
		}
		switch (status) {
			case "editing":
				handleClick.current = () => editTask(text.current.value)
				break
			case "subtask":
				handleClick.current = () => addSubTask(text.current.value)
				break
			default:
				handleClick.current = () => addTask(text.current.value)
				break
		}
	}, [chosen, array, status])

	return (
		<div className="grid sm:gap-10 gap-2 grid-cols-5 ">
			<input
				className="rounded-lg pl-2 border-2 border-gray-400 col-span-4"
				placeholder={status === "editing" ? "Edit a task" : "Add a task"}
				ref={text}
				onChange={e => (text.current.value = e.target.value)}
			></input>
			<button
				className="rounded-lg p-1 text-white col-span-1 text-center transition-colors border-2 border-white bg-green-700 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 "
				onClick={() => dispatch(handleClick.current())}
			>
				{status === "editing" ? <PencilSquareIcon className="size-6 mx-auto" /> : <PlusIcon className="size-6 mx-auto" />}
			</button>
		</div>
	)
}
