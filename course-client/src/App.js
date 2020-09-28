import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Course Sign Up</h1>
			<h2>Courses</h2>
			<h2>Sign Up</h2>

			<input type='text' placeholder='Name' />
			<input type='text' placeholder='Email' />
			<button onClick={() => alert('Sign up clicked!')}>Sign Up</button>
		</div>
	);
}

export default App;
