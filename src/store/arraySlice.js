import { createSlice } from "@reduxjs/toolkit"

const arraySlice = createSlice({
	name: "arraySlice",
	initialState: {
		array: [],
		chosen: null,
		status: null,
		lastId: 0,
	},
	reducers: {
		addTask(state, action) {
			state.array.push({ text: action.payload, isDone: false, subtasks: [], id: state.lastId++ + "" })
		},
		toggleDone(state, action) {
			const task = state.array.recursiveFind(action.payload)
			task.isDone = !task.isDone
		},
		removeTask(state, action) {
			state.array.recursiveFind(action.payload, true)
		},
		chooseTask(state, action) {
			state.chosen = action.payload.id
			state.status = action.payload.status
		},
		editTask(state, action) {
			const task = state.array.recursiveFind(state.chosen)
			task.text = action.payload
			state.chosen = null
			state.status = null
		},
		addSubTask(state, action) {
			const task = state.array.recursiveFind(state.chosen)
			task.subtasks.push({ text: action.payload, isDone: false, subtasks: [], id: state.lastId++ + "" })
			state.chosen = null
			state.status = null
		},
	},
})

export const { addTask, removeTask, chooseTask, editTask, toggleDone, addSubTask } = arraySlice.actions
export default arraySlice.reducer
