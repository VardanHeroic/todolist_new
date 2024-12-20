import { MinusIcon } from "@heroicons/react/24/solid"
import { PencilIcon } from "@heroicons/react/16/solid"
import { useDispatch, useSelector } from "react-redux"
import { removeElement, startEditElement } from "./store/arraySlice"

export default function List() {
	const dispatch = useDispatch()
	const array = useSelector(state => state.arrayReducer.array)
	const editing = useSelector(state => state.arrayReducer.editing)
	return (
		!editing && (
			<ul className="mt-4">
				{array.map((element, i) => {
					return (
						<li id={i} key={i} className="flex justify-between">
							<div className="">
								<input type="checkbox" name="" id="" className="mr-2 cursor-pointer accent-yellow-700" />
								<label className="cursor-default break-words">{element}</label>
							</div>
							<div className="text-nowrap">
								<button className="p-1" onClick={() => dispatch(removeElement(i))}>
									<MinusIcon className="text-black size-5 transition-colors hover:text-white hover:bg-red-700 rounded-md" />
								</button>
								<button className="p-1 " onClick={() => dispatch(startEditElement(i))}>
									<PencilIcon className="text-black  transition-colors size-5 hover:text-white hover:bg-yellow-700 rounded-md" />
								</button>
							</div>
						</li>
					)
				})}
			</ul>
		)
	)
}
