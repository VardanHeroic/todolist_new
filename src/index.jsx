import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app.jsx"
import { store } from "./store/store.js"
import { Provider } from "react-redux"

let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
)
