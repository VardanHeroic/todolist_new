import { createSlice } from "@reduxjs/toolkit"

const arraySlice = createSlice({
	name: "arraySlice",
	initialState: {
		array: [],
		editing: null,
	},
	reducers: {
		addElement(state, action) {
			state.array.push(action.payload)
		},
		removeElement(state, action) {
			state.array.splice(action.payload, 1)
		},
		startEditElement(state, action) {
			state.editing = action.payload.toString()
		},
		endEditElement(state, action) {
			state.array.splice(state.editing, 1, action.payload)
			state.editing = null
		},
	},
})

export const { addElement, removeElement, startEditElement, endEditElement } = arraySlice.actions
export default arraySlice.reducer
