import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<h1>✍️ Write a Postcard</h1>
			<Form />
		</div>
	);
}

export default App;
