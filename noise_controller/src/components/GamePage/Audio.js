import React from 'react';
import './Audio.css';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { endGame } from '../../actions';

// components
import AudioAnalyser from './AudioAnalyser';

// animal images
import skunk from './1x/img0.png';
import elephant from './1x/img1.png';
import hippo from './1x/img2.png';
import lion from './1x/img3.png';
import giraffe from './1x/img4.png';
import rhino from './1x/img5.png';
import jaguar from './1x/img6.png';
import turtle from './1x/img7.png';
import chicken from './1x/img8.png';
import duck from './1x/img9.png';

class Audio extends React.Component {
	constructor() {
		super();
		this.state = {
			audio: null,
			animals: [],
			delay: 5,
			count: 0,
			score: 0,
			highScore: 0
		};
	}

	// selectRandom = Math.floor(Math.random() * 9);

	animalsArray = [
		skunk,
		elephant,
		hippo,
		lion,
		giraffe,
		rhino,
		jaguar,
		chicken,
		duck
	];

	endGame = () => {
		const class_id = localStorage.getItem('class');

		const newSession = {
			class_id: class_id,
			score: this.state.highScore
		};
		this.props.endGame(newSession);

		this.props.history.push(`/scoreboard/${class_id}`);
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick = () => {
		this.setState({
			count: this.state.count + 1
		});
		if (this.state.count >= this.state.delay) {
			this.setState(
				{
					count: 0,
					animals: [
						...this.state.animals,
						{
							image: this
								.animalsArray[
								Math.floor(
									Math.random() *
										9
								)
							]
						}
					]
				},
				() => {
					this.setState(
						{
							score: this.state
								.animals.length
						},
						() => {
							if (
								this.state
									.score >
								this.state
									.highScore
							) {
								this.setState({
									highScore: this
										.state
										.score
								});
							}
						}
					);
				}
			);
		}
	};

	startTimer = () => {
		clearInterval(this.timer);
		this.timer = setInterval(this.tick, 1000);
	};

	stopTimer = () => {
		clearInterval(this.timer);
	};

	resetAnimals = () => {
		clearInterval(this.timer);
		this.timer = setInterval(this.tick, 1000);
		this.setState({
			animals: [],
			score: 0
		});
	};

	getMicrophone = async () => {
		const audio = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: false
		});
		this.setState({ audio });
	};

	stopMicrophone = () => {
		this.state.audio.getTracks().forEach(track => track.stop());
		this.setState({ audio: null });
	};

	toggleMicrophone = () => {
		if (this.state.audio) {
			this.stopMicrophone();
			this.stopTimer();
			this.setState({
				animals: []
			});
		} else {
			this.getMicrophone();
			this.startTimer();
		}
	};

	handleDelayChange = e => {
		this.setState({
			delay: e.target.value
		});
	};

	render() {
		console.log(this.selectRandom);
		return (
			<div className="App">
				<div className="center-layout">
					<button
						className="controls"
						onClick={this.toggleMicrophone}
					>
						{this.state.audio
							? 'Stop Mic'
							: 'Start Mic'}
					</button>
					<button
						className="controls"
						onClick={this.endGame}
					>
						{' '}
						End Session{' '}
					</button>
				</div>
				{this.state.audio && (
					<div class="center-layout-2">
						<div className="score">
							Current Score:{' '}
							{this.state.score}
						</div>
						<div className="high-score">
							Session High Score:{' '}
							{this.state.highScore}
						</div>
						<div className="delay">
							New Animal Every
							<input
								className="interval-width"
								name="delay"
								type="number"
								min="1"
								value={
									this
										.state
										.delay
								}
								onChange={
									this
										.handleDelayChange
								}
							/>
							Seconds
						</div>

						<div>
							<AudioAnalyser
								audio={
									this
										.state
										.audio
								}
								animals={
									this
										.state
										.animals
								}
								count={
									this
										.state
										.count
								}
								delay={
									this
										.state
										.delay
								}
								resetAnimals={
									this
										.resetAnimals
								}
							/>
						</div>
					</div>
				)}
				{this.state.animals &&
					this.state.animals.map(animal => (
						<img
							src={animal.image}
							height="100px"
							width="100px"
							alt="animals"
						/>
					))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		timer: state.ScoresReducer.timer
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		{ endGame }
	)(Audio)
);
