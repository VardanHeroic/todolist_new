import { MinusIcon, PencilIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { removeElement, startEditElement } from "./store/arraySlice"

export default function List() {
	const dispatch = useDispatch()
	const array = useSelector(state => state.arrayReducer.array)
	const editing = useSelector(state => state.arrayReducer.editing)
	return (
		!editing && (
			<ul>
				{array.map((element, i) => {
					return (
						<li id={i} key={i}>
							<input type="checkbox" name="" id="" />
							{element}
							<button className="p-1" onClick={() => dispatch(removeElement(i))}>
								<MinusIcon className="text-black size-5  hover:text-white hover:bg-red-700 rounded-md" />
							</button>
							<button className="p-1 size-5" onClick={() => dispatch(startEditElement(i))}>
								<PencilIcon className="text-black size-5  hover:text-white hover:bg-yellow-700 rounded-md" />
							</button>
						</li>
					)
				})}
			</ul>
		)
	)
}
