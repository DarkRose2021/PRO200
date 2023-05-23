import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Chat from "./pages/Chat";

function App() {
	return (
		<div className="App">
			<Chat />
		</div>
	);
}

export default App;