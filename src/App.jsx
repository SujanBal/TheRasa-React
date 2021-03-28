import "./App.scss";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'><Home /></Route>
				{/* <Route path='*'><Error /></Route> */}
			</Switch>
		</Router>
	);
}

export default App;
