import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
let count = 0

function renderCounter() {
	root.render(
		<div>
			<Home seconds={count} />
		</div>
	);
}



setInterval(() => {
	count = count + 1

	renderCounter()
}, 1000)

renderCounter()
