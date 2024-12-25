import { MinusIcon } from "@heroicons/react/24/solid"
import { PencilIcon } from "@heroicons/react/16/solid"
import { useDispatch } from "react-redux"
import { removeElement, startEditElement, toggleDone } from "./store/arraySlice"
import { useState } from "react"

export default function Lists({ array, name }) {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(name === "Pending")
	return (
		<>
			<button onClick={() => setIsOpen(!isOpen)}>{name}</button>
			<ul
				style={{ maxHeight: `${isOpen ? 50 * array.length : 0}px` }}
				className={`mt-4  transition-all duration-500 overflow-hidden `}
			>
				{array.map(task => {
					return (
						<li id={task.id} key={task.id} className="flex justify-between">
							<div className="">
								<input
									checked={task.isDone}
									type="checkbox"
									onChange={() => dispatch(toggleDone(task.id))}
									className="mr-2 cursor-pointer accent-yellow-700"
								/>
								<label className="cursor-default break-words">{task.text}</label>
							</div>
							<div className="text-nowrap">
								<button className="p-1" onClick={() => dispatch(removeElement(task.id))}>
									<MinusIcon className="text-black size-5 transition-colors hover:text-white hover:bg-red-700 rounded-md" />
								</button>
								<button className="p-1 " onClick={() => dispatch(startEditElement(task.id))}>
									<PencilIcon className="text-black  transition-colors size-5 hover:text-white hover:bg-yellow-700 rounded-md" />
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}
