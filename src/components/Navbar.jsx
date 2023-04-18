import Icon from './Icon';
import './Navbar.css';

export default function Navbar() {
	return (
		<div className="navbar">
			<img className="navbar__background" src="/navbar.svg"></img>
			<div className="navbar__icon-container">
				<div className="navbar__icon-subcontainer">
					<Icon src="/home.svg" description="Home" />
					<Icon src="/explore.svg" description="Explore" />
				</div>
				<Icon
					className="navbar__middle-icon"
					src="/live_tv.svg"
					description="Live"
				/>
				<div className="navbar__icon-subcontainer">
					<Icon src="/bookmark.svg" description="Library" />
					<Icon src="/profile.svg" description="Profile" />
				</div>
			</div>
		</div>
	);
}
