import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { BrowserRouter as Router} from "react-router-dom";


// I didn't use redux because technical task hadn't
// this item, and program was small.


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	
	document.getElementById('root'));