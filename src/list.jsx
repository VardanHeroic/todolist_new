import { MinusIcon, ChevronUpIcon, ChevronDownIcon, ArrowTurnDownLeftIcon } from "@heroicons/react/24/solid"
import { PencilIcon } from "@heroicons/react/16/solid"
import { useDispatch } from "react-redux"
import { removeTask, chooseTask, toggleDone } from "./store/arraySlice"
import { useState } from "react"

export default function Lists({ array, name }) {
	const dispatch = useDispatch()
	const isPending = name === "Pending"
	const getLength = array =>
		array.reduce((length, task) => {
			let subtaskLength = 0
			for (const subtask of task.subtasks) {
				subtaskLength += getLength(subtask.subtasks)
			}
			return length + task.subtasks.length + subtaskLength
		}, array.length)

	const [isOpen, setIsOpen] = useState(isPending)
	const createList = (array, nestLevel) => (
		<ul
			style={{ maxHeight: `${isOpen ? 48 * getLength(array) : 0}px` }}
			className={`transition-all ${nestLevel ? "ml-5" : ""} duration-1000 overflow-hidden `}
		>
			{array.map(task => {
				return (
					<li id={task.id} key={task.id}>
						<div className="flex justify-between">
							<div className="">
								<input
									checked={task.isDone}
									type="checkbox"
									onChange={() => dispatch(toggleDone(task.id))}
									className="mr-2 cursor-pointer accent-yellow-700"
								/>
								<label className={`cursor-default break-words ${isPending ? "" : "line-through"}`}>{task.text}</label>
							</div>
							<div className="text-nowrap">
								<button className="p-1" onClick={() => dispatch(removeTask(task.id))}>
									<MinusIcon className="text-black size-5 transition-colors hover:text-white hover:bg-red-700 rounded-md" />
								</button>
								<button className="p-1" onClick={() => dispatch(chooseTask({ id: task.id, status: "subtask" }))}>
									<ArrowTurnDownLeftIcon className="text-black size-5 transition-colors hover:text-white hover:bg-cyan-700 rounded-md" />
								</button>
								<button className="p-1 " onClick={() => dispatch(chooseTask({ id: task.id, status: "editing" }))}>
									<PencilIcon className="text-black  transition-colors size-5 hover:text-white hover:bg-yellow-700 rounded-md" />
								</button>
							</div>
						</div>
						{task.subtasks.length ? createList(task.subtasks, ++nestLevel) : null}
					</li>
				)
			})}
		</ul>
	)

	return (
		<div className="mt-4">
			<button className="w-full py-2 mb-3 border-b-gray-300 border-b text-left" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <ChevronDownIcon className="size-5 mr-2 inline" /> : <ChevronUpIcon className="size-5 mr-2 inline" />}
				{name}
			</button>
			{createList(array, 0)}
		</div>
	)
}
