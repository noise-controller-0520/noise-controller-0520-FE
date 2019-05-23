import React from 'react';
//import './App.css';
import logo from './logo.svg'

// components
import AudioAnalyser from './AudioAnalyser';

class Audio extends React.Component {
	constructor() {
		super();
		this.state = {
			audio: null,
			animals: [],
			delay: 1,
			count: 0,
			score: 0,
			highScore: 0
		};
	}

	componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count >= this.state.delay) {
      this.setState({
        count: 0,
				animals: [...this.state.animals, 1],
      }, () => {
				this.setState({
					score: this.state.animals.length
				}, () => {
					if (this.state.score > this.state.highScore) {
						this.setState({
							highScore: this.state.score
						})
					}
				})
			})
    }
  }

  startTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timer)
	}
	
	resetAnimals = () => {
		clearInterval(this.timer)
    this.timer = setInterval(this.tick, 1000)
		this.setState({
			animals: [],
			score: 0
		})
	}

	getMicrophone = async () => {
		const audio = await navigator.mediaDevices.getUserMedia({
			audio : true,
			video : false
		});
		this.setState({ audio });
	};

	stopMicrophone = () => {
		this.state.audio.getTracks().forEach((track) => track.stop());
		this.setState({ audio: null });
	};

	toggleMicrophone = () => {
		if (this.state.audio) {
			this.stopMicrophone();
			this.stopTimer()
			this.setState({
				animals: []
			})
		} else {
			this.getMicrophone();
			this.startTimer()
		}
	};

	handleDelayChange = e => {
		this.setState({
			delay: e.target.value
		})
	}

	render() {
		console.log(this.state.animals)
		return (
			<div className="App">
				<button onClick={this.toggleMicrophone}>{this.state.audio ? 'Stop Mic' : 'Start Mic'}</button>
				{this.state.audio && 
					<>
						<div className="score">
							Current Score: {this.state.score}
						</div>
						<div className="high-score">
							Session High Score: {this.state.highScore}
						</div>
						<div className="delay">
							New Animal Every
							<input
								name='delay'
								type='number'
								min='1'
								value={this.state.delay}
								onChange={this.handleDelayChange}
							/>
							Seconds
						</div>
						<div>
							<AudioAnalyser 
								audio={this.state.audio} 
								animals={this.state.animals} 
								count={this.state.count} 
								delay={this.state.delay}
								resetAnimals={this.resetAnimals}	
							/>
						</div>
					</>
				}
				{this.state.animals &&
					this.state.animals.map(animal => 
						<img 
							src={logo}
							height='100px'
							width='100px'
						/>
					)
				}
			</div>
		);
	}
}

export default Audio;
