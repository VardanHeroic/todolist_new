import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app.jsx"
import { store } from "./store/store.js"
import { Provider } from "react-redux"
import "./index.css"

if (!Array.prototype.recursiveFind) {
	Array.prototype.recursiveFind = function (value, remove = false) {
		const search = arr => {
			for (const i in arr) {
				const item = arr[i]
				if (item && typeof item === "object") {
					if (item.id === value) {
						if (remove) arr.splice(i, 1)
						return item
					}
					if (Array.isArray(item)) {
						const result = search(item)
						if (result) return result
					} else {
						for (const prop in item) {
							if (Array.isArray(item[prop])) {
								const result = search(item[prop])
								if (result) return result
							}
						}
					}
				}
			}
			return null
		}

		return search(this)
	}
}
let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
)
