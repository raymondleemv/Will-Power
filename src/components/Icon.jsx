import './Icon.css';

export default function Icon(props) {
	let className = 'icon ' + props.className;
	return (
		<div className={className}>
			<img src={props.src}></img>
			<p>{props.description}</p>
		</div>
	);
}
