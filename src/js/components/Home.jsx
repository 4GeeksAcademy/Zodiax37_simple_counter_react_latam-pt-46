import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx"

import PropTypes from "prop-types";
import ReactDOM from 'react-dom/client';


const Home = (props) => {


	return <div>
		<SecondsCounter seconds={props.seconds} />
	</div>


	
}


Home.propTypes = {
	seconds: PropTypes.number,
}

// function renderCounter() {
// 	root.render(
// 		<div>
// 			<SecondsCounter seconds={count} />
// 		</div>
// 	);
// }



// setInterval(() => {
// 	count = count + 1

// 	renderCounter()
// }, 1000)

// renderCounter()



export default Home;