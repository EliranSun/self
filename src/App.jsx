import { useState } from "react";
import Actions from "./components/Actions";
import Gauges from "./components/Gauges";

import "./App.css";

function App() {
	const [effects, setEffects] = useState([]);

	return (
		<div className="App">
			<Gauges effects={effects} />
			<Actions
				onActionClick={(newEffect) => setEffects([...effects, newEffect])}
			/>
		</div>
	);
}

export default App;
