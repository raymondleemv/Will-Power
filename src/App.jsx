import './App.css';
import Video from './components/Video';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<Video
				video={{ name: 'Yoga', src: '/squat.mp4', startTime: 'Started 1m ago' }}
				trainer={{ name: 'Yogi Master', src: '/trainer.png' }}
			/>
			<Navbar />
		</div>
	);
}

export default App;
