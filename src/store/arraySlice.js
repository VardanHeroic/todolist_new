import { createSlice } from "@reduxjs/toolkit"

const arraySlice = createSlice({
	name: "arraySlice",
	initialState: {
		array: [],
		editing: null,
		lastId: 0,
	},
	reducers: {
		addElement(state, action) {
			state.array.push({ text: action.payload, isDone: false, id: state.lastId++ + "" })
		},
		toggleDone(state, action) {
			const task = state.array.find(task => task.id === action.payload)
			task.isDone = !task.isDone
		},
		removeElement(state, action) {
			state.array = state.array.filter(task => task.id !== action.payload)
		},
		startEditElement(state, action) {
			state.editing = action.payload
		},
		endEditElement(state, action) {
			const task = state.array.find(task => task.id === state.editing)
			task.text = action.payload
			state.editing = null
		},
	},
})

export const { addElement, removeElement, startEditElement, endEditElement, toggleDone } = arraySlice.actions
export default arraySlice.reducer
