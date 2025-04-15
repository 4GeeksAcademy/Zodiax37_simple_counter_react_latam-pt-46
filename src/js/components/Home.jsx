import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx"
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')); 
let count = 0;

function renderCounter() {
    root.render(
	<div>
		<SecondsCounter seconds={count} />
	</div>
	);
}

setInterval(()=>{
	count =count+1

	renderCounter()
}, 1000)

renderCounter()

export default Home;