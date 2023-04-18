import './Video.css';
import { useState, useEffect } from 'react';
import { videoCaptions } from './captions';

export default function Video(props) {
	const [playState, setPlayState] = useState(true);
	const [showCaptions, setShowCaptions] = useState(true);
	const [captions, setCaptions] = useState('');
	const [volume, setVolume] = useState(true);
	const [video, setVideo] = useState();
	let playPauseBtnImg = playState ? '/pause.svg' : '/play.svg';
	let volumeBtnImg = volume ? '/volume-off.svg' : '/volume-on.svg';
	let captionsBtnImg = showCaptions ? '/captions-off.svg' : '/captions-on.svg';
	let captionsButtonHandleClick = () => {
		let captions = document.querySelector('.video__captions');
		if (showCaptions === true) {
			captions.blur();
			setShowCaptions(false);
		} else {
			captions.focus();
			setShowCaptions(true);
		}
	};

	let volumeHandleClick = () => {
		if (volume === true) {
			setVolume(false);
			video.muted = false;
		} else {
			setVolume(true);
			video.muted = true;
		}
	};

	let playPauseHandleClick = () => {
		if (playState === true) {
			setPlayState(false);
			video.pause();
		} else {
			setPlayState(true);
			video.play();
		}
	};

	useEffect(() => {
		setVideo(document.querySelector('.video'));
		let videoElement = document.querySelector('.video');
		let progress = document.querySelector('.video-progress-bar');
		let captions = document.querySelector('.video__captions');
		let counter = 0;
		setInterval(function () {
			progress.value = Math.round(
				(videoElement.currentTime / videoElement.duration) * 1000
			);
			if (counter >= videoCaptions.length) {
				return;
			}
			if (videoElement.currentTime > Number(videoCaptions[counter].time)) {
				setCaptions(videoCaptions[counter].caption);
				captions.blur();
				captions.focus();
				counter++;
			}
		}, 100);
	}, []);
	return (
		<div className="video-container">
			<video className="video" autoPlay muted>
				<source src={props.video.src}></source>
			</video>
			<button
				className="video__play-pause button"
				onClick={playPauseHandleClick}
			>
				<img src={playPauseBtnImg}></img>
			</button>
			<div className="video__header">
				<img src="/back.svg"></img>
				<div className="video__header__right">
					<img src="/notification.svg"></img>
					<button className="video__volume button" onClick={volumeHandleClick}>
						<img src={volumeBtnImg}></img>
					</button>
				</div>
			</div>
			<p className="video__captions" tabIndex="0">
				{showCaptions ? captions : ''}
			</p>
			{/* {showCaptions && (
				<p className="video__captions" tabIndex="0">
					{captions}
				</p>
			)} */}
			<div className="video__info">
				<div>
					<p className="video__name">{props.video.name}</p>
					<div className="video__trainer">
						<img src={props.trainer.src}></img>
						<p>{props.trainer.name}</p>
					</div>
					<p className="video__start-time">{props.video.startTime}</p>
				</div>
				<button
					className="video__captions-button button"
					onClick={captionsButtonHandleClick}
				>
					<img src={captionsBtnImg}></img>
				</button>
			</div>
			<progress className="video-progress-bar" max="1000" value="0"></progress>
		</div>
	);
}
