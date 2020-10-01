import { version, Component } from 'inferno';
import { BrowserRouter, Route, Switch } from 'inferno-router';
import ContactsStore from './store/ContactsStore';
import Contacts from './pages/Contacts/Contacts';
import Contact from './pages/Contact/Contact';
import Logo from './components/Logo/logo';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App container-xl">
				<header className="App-header">
					<div>
						<h1 class="App-title">Address Book</h1>
					</div>
				</header>
				<main>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" render={() => <Contacts store={ContactsStore} />} />
							<Route
								path="/contact/:id"
								render={(routerProps) => <Contact {...routerProps} store={ContactsStore} />}
							/>
						</Switch>
					</BrowserRouter>
				</main>
				<footer className="App-footer bg-white justify-content-between fixed-bottom">
					<span>Yoav Gurevich</span>
					<div>
						<a
							className="text-decoration-none"
							href="https://infernojs.org"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Logo width="25" height="25" />
							<span className="text-dark">v{version}</span>
						</a>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
